import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import { SoftwareReleaseTable } from "../components/software-release-table";
import SoftwareReleaseService from "@ui/shared/data/services/apis/software-release/authentication-service";
import { MakeSoftwareReleaseServiceService } from "@ui/shared/data/factory";
import { Button, Flex } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { PAGES_MANIFEST } from "../..";
import { useAppDispatch, useAppSelector } from "@ui/shared/hooks/redux";
import { actions } from "@ui/shared/infra/store/slices/resources";
import LoadingOverflow from "@ui/shared/layouts/components/LoadingOverflow";

export const OtaPage = () => {
  const dispatch = useAppDispatch();
  const { softwareReleases } = useAppSelector((state) => state.resources);
  const [searchParams, setSearchParams] = useSearchParams();
  // -- States
  const [isLoading, setIsLaoding] = useState(false);
  const softwareReleaseService: SoftwareReleaseService = useMemo(
    () => MakeSoftwareReleaseServiceService(),
    []
  );


  const shouldReload = useMemo(() => {
    return Number(searchParams.get("reload")) === 1;
  }, [softwareReleases]);

  // -- Hooks
  useEffect(() => {
    if (softwareReleases.length > 0 && shouldReload == false) return;
    setIsLaoding(true);
    softwareReleaseService
      .list()
      .then((softwareReleases) => {
        dispatch(actions.setSoftwareReleases(softwareReleases));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLaoding(false);
      });
  }, [shouldReload]);

  return (
    <PageScaffold
      title="Ota"
      breadcrumbs={[
        { label: "Painel de controle", value: "/" },
        { label: "Ota", value: "/ota" },
      ]}
      headerAuxContent={
        <>
          <Button type="default" size="middle">
            <Link to={PAGES_MANIFEST.OtaCreateRelease.path}>
              <Flex gap={10} align="center">
                <span>Nova Versão</span>
              </Flex>
            </Link>
          </Button>
        </>
      }
    >
      {isLoading ? (
        <LoadingOverflow/>
      ) : (
        <SoftwareReleaseTable
          list={softwareReleases}
          onActionPress={() => null}
        />
      )}
    </PageScaffold>
  );
};

export default OtaPage;
