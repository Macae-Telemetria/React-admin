import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React, { useMemo, useState } from "react";
import TextInput from "@ui/shared/components/controls/inputs/TextInput";
import BaseForm from "@ui/shared/components/controls/forms/BaseForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateSoftwareReleaseInputs,
  CreateSoftwareReleaseSchema,
  INTIAL_VALUES,
} from "./schema";
import "./styles.css";
import { Button } from "antd";
import TextAreaInput from "@ui/shared/components/controls/inputs/TextAreaInput";
import FileInput from "@ui/shared/components/controls/inputs/FileInput";
import InputWrapper from "@ui/shared/components/controls/inputs/BaseInput";
import LoadingOverflow from "@ui/shared/layouts/components/LoadingOverflow";
import { useNavigate } from "react-router-dom";
import { PAGES_MANIFEST } from "../..";
import SoftwareReleaseService from "@ui/shared/data/services/apis/software-release/service";
import { MakeSoftwareReleaseService } from "@ui/shared/data/factory";
export const OtaCreateReleasePage = () => {
  const softwareReleaseService: SoftwareReleaseService = useMemo(
    () => MakeSoftwareReleaseService(),
    []
  );
  const navigate = useNavigate();

  // -- States
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, setValue, watch } =
    useForm<CreateSoftwareReleaseInputs>({
      defaultValues: INTIAL_VALUES,
      resolver: yupResolver(CreateSoftwareReleaseSchema) as any,
    });

  const binaryFile = watch("binaryFile");
  const handleNewfile = (newFile: File) => {
    setValue("binaryFile", newFile);
  };

  const onSubmit: SubmitHandler<CreateSoftwareReleaseInputs> = (data) => {
    setIsLoading(true);
    softwareReleaseService
      .create(data)
      .then(() => {
        alert("sucesso!");
        navigate(`${ PAGES_MANIFEST.SoftwareReleases.path}?reload=${1}`);
      })
      .catch((error) => {
        console.log("", { error });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <PageScaffold
      title="Publicar nova versão"
      breadcrumbs={[
        { label: "Painel de controle", value: "/" },
        {
          label: "Software releases",
          value: PAGES_MANIFEST.SoftwareReleases.path,
        },
        { label: "Publicar", value: PAGES_MANIFEST.CreateSoftwareRelease.path },
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
          <BaseForm onSubmit={() => null} title="Arduino Software release">
            <TextInput
              label="Versão"
              placeHolder="xx.xx.xx"
              errorMessage={formState.errors?.version?.message || ""}
              override={{ ...register("version") }}
            />
            <TextInput
              label="titulo"
              placeHolder="Titulo da versão"
              errorMessage={formState.errors?.title?.message || ""}
              override={{ ...register("title") }}
            />

            <TextAreaInput
              label="Descrição"
              placeHolder="Descreva as mudanças"
              errorMessage={formState.errors?.description?.message || ""}
              override={{ ...register("description") }}
            />

            <InputWrapper
              label={"Binario"}
              errorMessage={formState.errors?.binaryFile?.message || ""}
              hasError={
                (formState.errors?.binaryFile?.message || "").length > 0
              }
            >
              <FileInput file={binaryFile} onChange={handleNewfile} />
            </InputWrapper>
          </BaseForm>
        )}
      </div>
    </PageScaffold>
  );
};

export default OtaCreateReleasePage;
