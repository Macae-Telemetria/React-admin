
import { useCallback, useEffect, useMemo, useState } from "react";
import { MakeStationService } from "../data/factory";

export const useLoadStations = ({ enabled = true }: { enabled?: boolean }) => {
  const stationServices = useMemo(
    () => MakeStationService(),
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await stationServices.list();
      setData(result);
    } catch (error: unknown) {
      console.log("useLoadStation: failed", { error });
    } finally {
      setIsLoading(false);
    }
  }, [stationServices, setData]);

  useEffect(() => {
    if (!loadData || !enabled) return;
    loadData();
  }, [loadData, enabled]);

  return { stations: data, isLoading };
};
