import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React from "react";
import { SoftwareReleaseIntegrationTable } from "../components/software-release-integration-table";
import { Button, Flex, Tabs, TabsProps } from "antd";
import { Link } from "react-router-dom";
import { PAGES_MANIFEST } from "../..";
import LoadingOverflow from "@ui/shared/layouts/components/LoadingOverflow";
import { useLoadSoftwareReleaseIntegrations } from "@ui/shared/hooks/useLoadSoftwareReleaseIntegrations";
import { StationsTable } from "../components/stations-table";

export const OtaPage = () => {
  // -- States
  const {
    softwareReleaseIntegrations,
    isLoading,
    handleCancelOtaUpdate,
    stations,
  } = useLoadSoftwareReleaseIntegrations({});

    const items: TabsProps["items"] = [
      
      {
        key: "1",
        label: "Integrações",
        children: (
          <SoftwareReleaseIntegrationTable
            list={softwareReleaseIntegrations}
            onActionPress={(item) => handleCancelOtaUpdate(item.id)}
          />
        ),
      },

      {
        key: "2",
        label: "Estações",
        children: (
          <StationsTable
            list={stations}
            onActionPress={(item) => null}
          />
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
      {isLoading ? (
        <LoadingOverflow />
      ) : (

        <Tabs
          defaultActiveKey="1"
          type="card"
          size={'small'}
          items={items}
        />
      )}
    </PageScaffold>
  );
};

export default OtaPage;
