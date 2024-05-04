
import { useCallback, useEffect, useMemo, useState } from "react";
import { MakeSoftwareReleaseIntegrationService, MakeSoftwareReleaseService } from "../data/factory";
import { useLoadStations } from "./useLoadStations";

export const useLoadSoftwareReleaseIntegrations = ({ enabled = true }: { enabled?: boolean }) => {
  const softwareReleaseIntegrationService = useMemo(
    () => MakeSoftwareReleaseIntegrationService(),
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const { stations, isLoading: isLoadingStations} = useLoadStations({});

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await softwareReleaseIntegrationService.list();
      setData(result);
    } catch (error: unknown) {
      console.log("useLoadSoftwareReleaseIntegrations: failed", { error });
    } finally {
      setIsLoading(false);
    }
  }, [softwareReleaseIntegrationService, setData]);


  const handleCancelOtaUpdate = async (id: string) => {
    try {
      setIsLoading(true);
      await softwareReleaseIntegrationService.cancelOtaUpdate(id);
      loadData();
    } catch (error: unknown) {
      console.log("useLoadSoftwareReleaseIntegrations: failed", { error });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!loadData || !enabled) return;
    loadData();
  }, [loadData, enabled]);

  return {
    softwareReleaseIntegrations: data,
    isLoading: isLoading || isLoadingStations,
    stations,
    handleCancelOtaUpdate,
  };
};
