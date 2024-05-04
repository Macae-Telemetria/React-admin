import { useCallback, useEffect, useMemo, useState } from "react";
import {
  MakeSoftwareReleaseIntegrationService,
} from "../data/factory";

export const useLoadSoftwareReleaseIntegrations = ({
  enabled = true,
}: {
  enabled?: boolean;
}) => {
  const softwareReleaseIntegrationService = useMemo(
    () => MakeSoftwareReleaseIntegrationService(),
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

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



  useEffect(() => {
    if (!loadData || !enabled) return;
    loadData();
  }, [loadData, enabled]);

  return {
    softwareReleaseIntegrations: data,
    isLoading,
    loadData
  };
};
