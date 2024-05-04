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
  const wasCanceled = status == SoftwareReleaseInterationStatus.CANCELLED;
  return (
    <Steps
      size={"small"}
      items={[
        {
          title:
            status > SoftwareReleaseInterationStatus.PENDING
              ? "Recebido"
              : "A receber",
          icon: status == SoftwareReleaseInterationStatus.PENDING && (
            <LoadingOutlined />
          ),
          status:
            status == SoftwareReleaseInterationStatus.PENDING
              ? "process"
              : "finish",
        },
        {
          title:
            status > SoftwareReleaseInterationStatus.IN_PROGRESS
              ? "Baixado"
              : "Baixando",
          icon: status == SoftwareReleaseInterationStatus.IN_PROGRESS && (
            <LoadingOutlined />
          ),
          status:
            status > SoftwareReleaseInterationStatus.IN_PROGRESS
              ? "finish"
              : status == SoftwareReleaseInterationStatus.IN_PROGRESS
              ? "process"
              : "wait",
        },
        {
          title:
            status > SoftwareReleaseInterationStatus.IN_PROGRESS
              ? "Instalado"
              : "Instalando",
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
          title: hasFailed
            ? wasCanceled
              ? "Cancelado"
              : "Falhou"
            : hasSucceded
            ? "Sucesso"
            : "Confirmado",
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
