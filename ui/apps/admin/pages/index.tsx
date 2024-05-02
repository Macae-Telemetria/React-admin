import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Login from "./Login";
import OtaPage from "./Ota/OtaHome";
import OtaCreateReleasePage from "./Ota/OtaCreateRelease";

export type PageManifest = {
  path: string;
  Element: () => React.JSX.Element;
};
export const PAGES_MANIFEST: Record<string, PageManifest> = {
  Login: {
    path: "/login",
    Element: Login,
  },
  Dashboard: {
    path: "/dashboard",
    Element: Dashboard,
  },
  Ota: {
    path: "/ota",
    Element: OtaPage,
  },
  OtaCreateRelease: {
    path: "/ota/novo",
    Element: OtaCreateReleasePage,
  },
  Profile: {
    path: "/minha-organizacao",
    Element: Profile,
  },
};