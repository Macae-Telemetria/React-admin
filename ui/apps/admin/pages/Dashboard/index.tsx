import PageScaffold from "@ui/shared/layouts/PageScaffold";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { PAGES_MANIFEST } from "..";
import { Card, Flex, Typography } from "antd";
const { Text } = Typography;

import {
  UploadOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";

export const DashboardPage = () => {
  return (
    <PageScaffold
      title="Admin"
      breadcrumbs={[{ label: "Bem-vindo", value: "/" }]}
    >
      <div className="dashboard-grid">
        <section>
          <Card style={{ width: `100%` }}>
            <Flex gap={12}>
              <UploadOutlined style={{ fontSize: "24px" }} />
              <Link to={PAGES_MANIFEST.SoftwareReleases.path}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Software releases
                </Typography.Title>
              </Link>
            </Flex>
          </Card>
        </section>

        <section>
          <Card style={{ width: `100%` }}>
            <Flex gap={12}>
              <CloudUploadOutlined style={{ fontSize: "24px" }} />
              <Link to={PAGES_MANIFEST.Ota.path}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  OTA Update
                </Typography.Title>
              </Link>
            </Flex>
          </Card>
        </section>

       {/*  <section>
          <Card style={{ width: `100%` }}>
            <Flex gap={12}>
              <TeamOutlined style={{ fontSize: "24px" }} />

              <Link to={PAGES_MANIFEST.Ota.path}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Organizações
                </Typography.Title>
              </Link>
            </Flex>
          </Card>
        </section>

        <section>
          <Card style={{ width: `100%` }}>
            <Flex gap={12}>
              <UserOutlined style={{ fontSize: "24px" }} />
              <Link to={PAGES_MANIFEST.Ota.path}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Usuarios
                </Typography.Title>
              </Link>
            </Flex>
          </Card>
        </section> */}
      </div>
    </PageScaffold>
  );
};

export default DashboardPage;
