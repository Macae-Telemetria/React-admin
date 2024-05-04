import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SoftwareReleaseIntegrationTable } from "../components/software-release-integration-table";
import { Button, Flex, Tabs, TabsProps } from "antd";
import { Link } from "react-router-dom";
import { PAGES_MANIFEST } from "../..";
import LoadingOverflow from "@ui/shared/layouts/components/LoadingOverflow";
import { useLoadSoftwareReleaseIntegrations } from "@ui/shared/hooks/useLoadSoftwareReleaseIntegrations";
import { StationsTable } from "../components/stations-table";
import { useLoadStations } from "@ui/shared/hooks/useLoadStations";
import { MakeSoftwareReleaseIntegrationService } from "@ui/shared/data/factory";
import { SoftwareReleaseIntegration } from "@ui/shared/domain/entities/SoftwareReleaseIntegration";

export const OtaPage = () => {
  const softwareReleaseIntegrationService = useMemo(
    () => MakeSoftwareReleaseIntegrationService(),
    []
  );
  // -- States
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { stations, isLoading: isLoadingStations } = useLoadStations({});
  const {
    softwareReleaseIntegrations,
    isLoading: isLoadingIntegration,
    loadData,
  } = useLoadSoftwareReleaseIntegrations({});

  const isLoading = isLoadingIntegration || isLoadingStations;

  const isThereInProgress = useMemo(() => {
    const some = (softwareReleaseIntegrations ?? []).some((s) => s.status < 3);
    return !!some;
  }, [softwareReleaseIntegrations]);

  useEffect(() => {
    if (!loadData || !isThereInProgress) return;

    const refreshInterval = setInterval(() => {
      loadData();
    }, 5000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [loadData, isThereInProgress]);


  const handleCancelOtaUpdate = async (id: string) => {
    try {
      setIsSubmitting(true);
      await softwareReleaseIntegrationService.cancelOtaUpdate(id);
      loadData();
    } catch (error: unknown) {
      console.log("useLoadSoftwareReleaseIntegrations: failed", { error });
      setIsSubmitting(false);
    }
  };

  const handleDeleteIntegration = async (id: string) => {
    try {
      setIsSubmitting(true);
      await softwareReleaseIntegrationService.delete(id);
      loadData();
    } catch (error: unknown) {
      console.log("useLoadSoftwareReleaseIntegrations: failed", { error });
      setIsSubmitting(false);
    }
  };

  const handleAction = (action: string, item: SoftwareReleaseIntegration) => {
    if (action === "delete") {
      handleDeleteIntegration(item.id);
    } else {
      handleCancelOtaUpdate(item.id);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Integrações",
      children: (
        <SoftwareReleaseIntegrationTable
          list={softwareReleaseIntegrations}
          onActionPress={handleAction}
        />
      ),
    },

    {
      key: "2",
      label: "Estações",
      children: (
        <StationsTable list={stations} onActionPress={(item) => null} />
      ),
    },
  ];

  return (
    <PageScaffold
      title="OTA"
      breadcrumbs={[
        { label: "Painel de controle", value: "/" },
        {
          label: "OTA",
          value: PAGES_MANIFEST.Ota.path,
        },
      ]}
      headerAuxContent={
        <Flex gap={8}>
          <Button type="default" size="middle">
            <Link to={PAGES_MANIFEST.OtaUpdate.path}>
              <Flex gap={10} align="center">
                <span>Iniciar atualização</span>
              </Flex>
            </Link>
          </Button>
        </Flex>
      }
    >
      {isLoading && (softwareReleaseIntegrations ?? []).length == 0 ? (
        <LoadingOverflow />
      ) : (
        <Tabs defaultActiveKey="1" type="card" size={"small"} items={items} />
      )}
    </PageScaffold>
  );
};

export default OtaPage;
