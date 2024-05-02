import React from "react";
import "./styles.css";
import BreadCrumbs from "../BreadCrumbs";

export type CommonHeaderProps = {
  title?: string;
  icon?: string;
  breadcrumbs?: Array<{ value: string, label: string, icon?: any}>
};

export const CommonHeader = (props: CommonHeaderProps) => {
  const { breadcrumbs, title, icon="home"} = props;

  return (
    <div className={`common-header`}>
      <div className="commmon-header-content">
        <section>
          <div className="page-headline">
            <span className="page-title">
              {title || breadcrumbs[breadcrumbs.length - 1].label}
            </span>
            <BreadCrumbs breadcrumbs={breadcrumbs ?? []} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommonHeader;
