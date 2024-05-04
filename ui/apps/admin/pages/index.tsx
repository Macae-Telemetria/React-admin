import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SoftwareReleaseHomePage from "./SoftwareRelease/Home";
import OtaCreateReleasePage from "./SoftwareRelease/CreateSoftwareRelease";
import OtaPage from "./OTA/Home";
import PushOtaUpdate from "./OTA/PushOtaUpdate";

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
  SoftwareReleases: {
    path: "/software-releases",
    Element: SoftwareReleaseHomePage,
  },
  CreateSoftwareRelease: {
    path: "/software-releases/publicar",
    Element: OtaCreateReleasePage,
  },
  Ota: {
    path: "/ota",
    Element: OtaPage,
  },
  OtaUpdate: {
    path: "/ota/push",
    Element: PushOtaUpdate,
  },
  Profile: {
    path: "/minha-organizacao",
    Element: Profile,
  },
};