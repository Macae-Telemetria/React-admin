import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React from "react";
import { SoftwareReleaseIntegrationTable } from "../components/software-release-integration-table";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { PAGES_MANIFEST } from "../..";
import LoadingOverflow from "@ui/shared/layouts/components/LoadingOverflow";
import { useLoadSoftwareReleaseIntegrations } from "@ui/shared/hooks/useLoadSoftwareReleaseIntegrations";

export const OtaPage = () => {
  // -- States
  const { softwareReleaseIntegrations, isLoading, handleCancelOtaUpdate } =
    useLoadSoftwareReleaseIntegrations({});

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
        <SoftwareReleaseIntegrationTable
          list={softwareReleaseIntegrations}
          onActionPress={(item) => handleCancelOtaUpdate(item.id)}
        />
      )}
    </PageScaffold>
  );
};

export default OtaPage;
