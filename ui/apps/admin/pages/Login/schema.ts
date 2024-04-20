import * as Yup from "yup";

export type LoginInputs = {
  username: string;
  password: string;
};

export const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export const LOGIN_INTIAL_VALUES: LoginInputs = {
  username: "lucasbfonte@gmail.com",
  password: "123",
};
