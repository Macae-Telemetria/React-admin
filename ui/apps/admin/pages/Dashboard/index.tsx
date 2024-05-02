import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"
export const DashboardPage = () => {
  return (
    <PageScaffold
      title="Admin"
      breadcrumbs={[{ label: "Bem-vindo", value: "/" }]}
    >
      <div className="dashboard-grid">
        <section>
          <Link to={"/ota"} > Ota </Link>
        </section>

        <section>
          <Link to={"/usuarios"} > Usuarios </Link>
        </section>

        <section>
          < Link to={"/organizacoes"} > Organizações </Link>
        </section>
      </div>
    </PageScaffold>
  );
};

export default DashboardPage;
