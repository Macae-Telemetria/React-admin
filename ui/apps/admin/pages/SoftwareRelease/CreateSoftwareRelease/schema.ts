import * as Yup from "yup";

export type CreateSoftwareReleaseInputs = {
  version: string;
  title: string;
  description: string;
  binaryFile: File;
};

function isBinaryFile(file) {
  return file instanceof File && file.type === 'application/octet-stream';
}

export const CreateSoftwareReleaseSchema = Yup.object().shape({
  version: Yup.string()
    .required("Campo obrigatório")
    .matches(/^\d+\.\d+\.\d+$/, {
      message: "Formato inválido para versão. X.Y.Z",
    }),
  title: Yup.string().required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
  binaryFile: Yup.mixed()
    .required("Campo obrigatório")
    .test("fileType", "Deve conter um binário válido (.bin)", isBinaryFile),
});

export const INTIAL_VALUES: CreateSoftwareReleaseInputs = {
  version: "",
  title: "",
  description: "",
  binaryFile: null,
};
