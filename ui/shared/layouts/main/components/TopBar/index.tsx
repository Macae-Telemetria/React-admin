import React from "react";
import "./styles.css";
import { UserInfo } from "@ui/shared/domain/common/object-values/user-info";
import UserOptions from "@ui/shared/layouts/components/UserOptions";
import { useAuthentication } from "@ui/apps/admin/contexts/Authentication";

export type CommonHeaderProps = {
  logoUrl?: string;
  userInfo?: UserInfo;
};

export const TopBar = (props: CommonHeaderProps) => {

  const { user } = useAuthentication();
  // props
  return (
    <div className={`main-top-bar`}>
      <div className="main-top-bar-container">
        <section className="organization-logo"></section>
        <section>
          <UserOptions userInfo={{ name: user?.name || "" }} />
        </section>
      </div>
    </div>
  );
};

export default TopBar;
