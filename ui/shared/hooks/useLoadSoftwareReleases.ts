
import { useCallback, useEffect, useMemo, useState } from "react";
import { MakeSoftwareReleaseService } from "../data/factory";

export const useLoadSoftwareReleases = ({ enabled = true }: { enabled?: boolean }) => {
  const softwareReleaseService = useMemo(
    () => MakeSoftwareReleaseService(),
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [softwareReleases, setSoftwareReleases] = useState([]);

  const loadSoftwareReleases = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await softwareReleaseService.list();
      setSoftwareReleases(result);
    } catch (error: unknown) {
      console.log("failed to load software releases", { error });
    } finally {
      setIsLoading(false);
    }
  }, [softwareReleaseService, setSoftwareReleases]);

  useEffect(() => {
    if (!loadSoftwareReleases || !enabled) return;
    loadSoftwareReleases();
  }, [loadSoftwareReleases, enabled]);

  return { softwareReleases, isLoading };
};
