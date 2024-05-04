import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { PAGES_MANIFEST } from "..";
import { Card } from "antd";
export const DashboardPage = () => {
  return (
    <PageScaffold
      title="Admin"
      breadcrumbs={[{ label: "Bem-vindo", value: "/" }]}
    >
      <div className="dashboard-grid">
        <section>
          <Card style={{ width: `100%` }}>
            <Link to={PAGES_MANIFEST.SoftwareReleases.path}>
              Software releases
            </Link>
          </Card>
        </section>

        <section>
          <Card style={{ width: `100%` }}>
            <Link to={PAGES_MANIFEST.Ota.path}> OTA Update </Link>
          </Card>
        </section>
      </div>
    </PageScaffold>
  );
};

export default DashboardPage;
