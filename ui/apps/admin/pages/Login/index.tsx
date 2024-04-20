import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import BaseForm from "@ui/shared/components/controls/forms/BaseForm";
import TextInput from "@ui/shared/components/controls/inputs/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_INTIAL_VALUES, LoginFormSchema, LoginInputs } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { MakeAuthenticationServices } from "@ui/shared/data/factory";
import { useAuthentication } from "../../contexts/Authentication";

export const Login = () => {

  const authentication = useMemo(()=>MakeAuthenticationServices(),[])
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const { user, purgeUser, signUserByAccessToken } = useAuthentication();

  // States
  const [isLoading, setIsLoading ] = useState(false);

  const { register, handleSubmit, formState, setValue } = useForm<LoginInputs>({
    defaultValues: LOGIN_INTIAL_VALUES,
    resolver: yupResolver(LoginFormSchema) as any,
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {

    setIsLoading(true);
    authentication.signin({
      username: data.username,
      password: data.password,
    }).then(async (data)=>{
      await signUserByAccessToken(data.accessToken || "");
      const redirect_url = search.get("redirect") || "/";
      console.log("sucesso!", { redirect_url });
      navigate(redirect_url); 
    }).catch(error => {
      console.log("", { error });
    }).finally(()=>{
      setIsLoading(false);
    });
  };

  return (
    <div id="login-page">
      <div className="login-grid">
        <section>
          <div className="login-organization-info">
            <div className="organization-logo-container"></div>
            <span> </span>
          </div>
        </section>
        <section>
          {user ? (
            <div>
              <span> Ola usuario, {user?.name || "Não identificado"} </span>
              <br />
              <button onClick={purgeUser}> Sair </button>
              <button
                onClick={() => {
                  window.location.replace("/");
                }}
              >
                Voltar
              </button>
            </div>
          ) : (
            <BaseForm
              title="Login"
              onSubmit={handleSubmit(onSubmit)}
              isLoading={isLoading}
              customStyle={{ maxWidth: "400px" }}
            >
              <TextInput
                label="Email"
                errorMessage={formState.errors?.username?.message || ""}
                override={{ ...register("username") }}
              />

              <TextInput
                label="Senha"
                errorMessage={formState.errors?.password?.message || ""}
                override={{ ...register("password") }}
              />
              <button type="submit" onSubmit={handleSubmit(onSubmit)}>
                Entrar
              </button>
            </BaseForm>
          )}
        </section>
      </div>
    </div>
  );
};

export default Login;
