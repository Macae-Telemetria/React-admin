import React from "react";

import "./styles.css";
import CommonHeader from "../components/CommonHeader";
import LoadingOverflow from "../components/LoadingOverflow";

export interface PageScaffoldProps {
  title?: string;
  icon?: string;
  breadcrumbs?: Array<{ label: string; value: string }>;
  children?: React.ReactNode;
  headerAuxContent?: React.ReactNode;
  isLoading?: boolean
  hideTopbar?: boolean
}

export function PageScaffold(props: PageScaffoldProps) {
  const {
    title,
    breadcrumbs = [],
    children,
    isLoading = false,
    headerAuxContent,
    hideTopbar = false,
    icon,
  } = props;
  return (
    <div className={`page-scaffold`}>
      <div className="page-scaffold-header desktop-only">
        <div className="scaffold-container page-scaffold-header-content">
          <CommonHeader
            title={title}
            icon={icon}
            breadcrumbs={breadcrumbs ?? []}
          />
          {headerAuxContent && headerAuxContent}
        </div>
      </div>
      <main className="scaffold-container">{children}</main>
      {isLoading && <LoadingOverflow fill />}
    </div>
  );
}

export default PageScaffold;
