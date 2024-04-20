import React, { useState } from "react";
import "./styles.css";
import TopBar from "./components/TopBar";
import SideMenu from "./components/SideMenu";
import { OrganizationInfo, UserInfo } from "@ui/shared/domain/common/object-values/user-info";

export type MainLayoutProps = {
  children?: React.ReactNode;
  organizationInfo?: OrganizationInfo;
  userInfo?: UserInfo;
};

export const MainLayout = (props: MainLayoutProps) => {
  const { children, organizationInfo, userInfo } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="main-layout">
        <header>
          <TopBar organizationInfo={organizationInfo} userInfo={userInfo} />
        </header>

       {/*  <aside className={`${showMenu ? "show-aside-mobile" : ""}`}>
          <SideMenu
            expand={false}
            onToggle={() => setShowMenu((prev) => !prev)}
          />
        </aside> */}

        <main> {children}</main>

        <footer> Projeto X</footer>
      </div>
    </>
  );
};

export default MainLayout;
