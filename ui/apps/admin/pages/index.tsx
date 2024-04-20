import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Login from "./Login";

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
  Profile: {
    path: "/minha-organizacao",
    Element: Profile,
  },
};