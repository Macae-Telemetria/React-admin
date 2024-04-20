import React from "react";
import "./styles.css";
import BreadCrumbs from "../BreadCrumbs";

export type CommonHeaderProps = {
  breadcrumbs?: Array<{ value: string; label: string; icon?: any }>;
};

export const CommonHeader = (props: CommonHeaderProps) => {
  // props
  const { breadcrumbs } = props;
  return (
    <div className={`common-header`}>
      <div className="common-container commmon-header-content">
        <section>
          <BreadCrumbs breadcrumbs={breadcrumbs ?? []} onClick={() => null} />
        </section>
      </div>
    </div>
  );
};

export default CommonHeader;
