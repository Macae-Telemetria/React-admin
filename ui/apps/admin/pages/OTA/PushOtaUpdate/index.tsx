import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React, { useState } from "react";
import TextInput from "@ui/shared/components/controls/inputs/TextInput";
import BaseForm from "@ui/shared/components/controls/forms/BaseForm";

import "./styles.css";
import { Alert, Button } from "antd";
import LoadingOverflow from "@ui/shared/layouts/components/LoadingOverflow";
import { PAGES_MANIFEST } from "../..";
import { usePushOtaUpdateController } from "./controller";
import ComboBox from "@ui/shared/components/controls/inputs/ComboBox";
import StationService from "@ui/shared/data/services/apis/station/service";
export const PushOtaUpdate = () => {
  const {
    handleSubmit,
    values,
    onSubmit,
    formState,
    softwareReleaseOptions,
    stationOptions,
    isLoading,
    handleSoftwareVersionChange,
    handleStationChange,
  } = usePushOtaUpdateController();
  // -- States

  return (
    <PageScaffold
      title="Publicar nova versão"
      breadcrumbs={[
        { label: "Painel de controle", value: "/" },
        {
          label: "OTA",
          value: PAGES_MANIFEST.Ota.path,
        },
        { label: "Atualizar embarcado", value: PAGES_MANIFEST.OtaUpdate.path },
      ]}
      headerAuxContent={
        <>
          <Button type="default" onClick={handleSubmit(onSubmit)}>
            Salvar
          </Button>
        </>
      }
    >
      <div className="ota-create-release-container">
        {isLoading ? (
          <LoadingOverflow />
        ) : (
          <BaseForm onSubmit={() => null} title="Atualizar Embarcado">
            <ComboBox
              errorMessage={formState.errors?.version?.message || ""}
              label="Versão do software"
              name="softwareRelease"
              options={softwareReleaseOptions}
              value={values.version}
              onChange={handleSoftwareVersionChange}
            />

            <ComboBox
              errorMessage={formState.errors?.version?.message || ""}
              label="Estação"
              name="station"
              options={stationOptions}
              value={values.station}
              onChange={handleStationChange}
            />
              <Alert
                message="Cuidado"
                description="Tem certeza do que está fazendo?"
                type="warning"
                showIcon
                closable
              />
          </BaseForm>
        )}
      </div>
    </PageScaffold>
  );
};

export default PushOtaUpdate;
