import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React from "react";
import { SoftwareReleaseTable } from "../components/software-release-table";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { PAGES_MANIFEST } from "../..";
import LoadingOverflow from "@ui/shared/layouts/components/LoadingOverflow";
import { useLoadSoftwareReleases } from "@ui/shared/hooks/useLoadSoftwareReleases";

export const SoftwareReleasesPage = () => {

  const { softwareReleases, isLoading } = useLoadSoftwareReleases({});

  return (
    <PageScaffold
      title="Software releases"
      breadcrumbs={[
        { label: "Painel de controle", value: "/" },
        {
          label: "Software releases",
          value: PAGES_MANIFEST.SoftwareReleases.path,
        },
      ]}
      headerAuxContent={
        <Flex gap={8}>
          <Button type="default" size="middle">
            <Link to={PAGES_MANIFEST.CreateSoftwareRelease.path}>
              <Flex gap={10} align="center">
                <span>Publicar nova Versão</span>
              </Flex>
            </Link>
          </Button>
        </Flex>
      }
    >
      {isLoading ? (
        <LoadingOverflow />
      ) : (
        <SoftwareReleaseTable
          list={softwareReleases}
          onActionPress={() => null}
        />
      )}
    </PageScaffold>
  );
};

export default SoftwareReleasesPage;
