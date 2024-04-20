import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import {
  MakeAuthenticationServices,
  authenticationStorage,
} from "@ui/shared/data/factory";
import { authActions } from "@ui/shared/infra/store/slices/auth";
import AuthenticationService from "@ui/shared/data/services/apis/authentication/authentication-service";

export const authenticationContext = createContext({} as any);

const { Provider } = authenticationContext;

export function AuthenticationProvider({ children }: any): any {
  // -- Providers
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const authentication: AuthenticationService = useMemo(
    () => MakeAuthenticationServices(),
    []
  );

  // -- States
  const [wasUserLoaded, setwasUserLoaded ] = useState(false);
  const [persisted] = useState(authenticationStorage.get());

  // -- Hooks
  async function signUserByAccessToken(accessToken: string) {
    const user = await authentication.verifyToken(accessToken);
    dispatch(authActions.setUser(user));
    authenticationStorage.store({ accessToken, user });
  }

  const loadPreviousUser = async () => {

    setwasUserLoaded(false);
    try {
      if (!persisted?.accessToken || !persisted?.user) {
        throw new Error("no user");
      }
      let user = persisted.user || null;
      let accessToken = persisted.accessToken || "";
      if (!!user) {
        dispatch(authActions.setUser(user));
      } else if (!!accessToken) {
        await signUserByAccessToken(persisted.accessToken);
      }
    } catch (error) {
      console.log("");
    } finally {
      setwasUserLoaded(true);
    }
  };

  useEffect(() => {
    loadPreviousUser();
  }, [persisted]);

  function pugeUser() {
    authenticationStorage.remove();
    dispatch(authActions.setUser(null));
  }

  const value = useMemo(
    () => ({ user, pugeUser, signUserByAccessToken }),
    [user, pugeUser, signUserByAccessToken]
  );

  return (
    <Provider value={value}>
      {!wasUserLoaded ? "Carregando..." : children}
    </Provider>
  );
}

export const useAuthentication = () => {
  const context = useContext(authenticationContext);
  if (!context) {
    throw new Error(
      "useAuthentication must be used within AuthenticationProvider"
    );
  }
  return context;
};
