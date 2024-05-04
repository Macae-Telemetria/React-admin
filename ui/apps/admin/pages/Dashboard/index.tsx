import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"
import { PAGES_MANIFEST } from "..";
export const DashboardPage = () => {
  return (
    <PageScaffold
      title="Admin"
      breadcrumbs={[{ label: "Bem-vindo", value: "/" }]}
    >
      <div className="dashboard-grid">
        <section>
          <Link to={PAGES_MANIFEST.SoftwareReleases.path}>
            Software releases
          </Link>
        </section>

        <section>
          <Link to={PAGES_MANIFEST.Ota.path}> OTA Update </Link>
        </section>
      </div>
    </PageScaffold>
  );
};

export default DashboardPage;
