import React from "react";
import "./styles.css";
import { OrganizationInfo, UserInfo } from "@ui/shared/domain/common/object-values/user-info";

export type CommonHeaderProps = {
  logoUrl?: string;
  organizationInfo?: OrganizationInfo;
  userInfo?: UserInfo;
};

export const TopBar = (props: CommonHeaderProps) => {

  const { userInfo, organizationInfo } = props;
  // props
  return (
    <div className={`main-top-bar`} style={{backgroundColor: organizationInfo?.primaryColor}}>
      <div className="main-top-bar-container">
        <section className="organization-logo">
          <img src={organizationInfo?.logo ?? null} />
        </section>
        <section>
          {userInfo?.username || "Carregando..."}
          {userInfo && (
            <>
              <button> Sair </button>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default TopBar;
