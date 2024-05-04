import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Steps } from "antd";
import { SoftwareReleaseInterationStatus } from "@ui/shared/domain/entities/SoftwareReleaseIntegration";

export const StatusSteps = (props: {
  status: SoftwareReleaseInterationStatus;
}) => {
  const { status } = props;

  const hasFailed = [
    SoftwareReleaseInterationStatus.CANCELLED,
    SoftwareReleaseInterationStatus.FAILED,
  ].includes(status);

  const hasSucceded = status == SoftwareReleaseInterationStatus.SUCCESS;

  return (
    <Steps
      size={"small"}
      
      items={[
        {
          title: "Baixando",
          icon: status == SoftwareReleaseInterationStatus.IN_PROGRESS && (
            <LoadingOutlined />
          ),
          status:
            status == SoftwareReleaseInterationStatus.IN_PROGRESS
              ? "process"
              : "finish",
        },
        {
          title: "Instalando",
          icon: status == SoftwareReleaseInterationStatus.INSTALING && (
            <LoadingOutlined />
          ),
          status:
            status > SoftwareReleaseInterationStatus.INSTALING
              ? "finish"
              : status == SoftwareReleaseInterationStatus.INSTALING
              ? "process"
              : "wait",
        },
        {
          title: hasFailed ? "Falhou" : hasSucceded ? "Sucesso" : "Concluir",
          status:
            status == SoftwareReleaseInterationStatus.SUCCESS
              ? "finish"
              : hasFailed
              ? "error"
              : "wait",
        },
      ]}
    />
  );
};
