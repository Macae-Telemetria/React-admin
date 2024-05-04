import { ComboOption } from "@ui/shared/components/controls/inputs/ComboBox";
import * as Yup from "yup";

export type PushOtaUpdateInputs = {
  station: ComboOption | null;
  version: ComboOption | null;
};

export const PushOtaUpdateSchema = Yup.object().shape({
  station: Yup.object().required("Campo obrigatório"),
  version: Yup.object().required("Campo obrigatório"),
});

export const INTIAL_VALUES: PushOtaUpdateInputs = {
  station: null,
  version: null,
};
