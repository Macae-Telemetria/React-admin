import React from "react";
import { Button, Flex, Table, Tag, Typography } from "antd";
const { Text } = Typography;

import {
  SoftwareReleaseIntegration,
  SoftwareReleaseInterationStatus,
} from "@ui/shared/domain/entities/SoftwareReleaseIntegration";
import { CloseCircleFilled } from "@ant-design/icons";
import { StatusSteps } from "@ui/shared/components/StatusSteps";

export type SoftwareReleaseIntegrationTableProps = {
  onActionPress: Function;
  list: SoftwareReleaseIntegration[];
};

export function SoftwareReleaseIntegrationTable({
  list,
  onActionPress,
}: SoftwareReleaseIntegrationTableProps) {
  const columns = [
    {
      key: "stationId",
      width: 100,
      render: (_: any, item) => (
        <Text ellipsis style={{ margin: 0 }}>
          {item.stationName || item.stationId || ""}
        </Text>
      ),
    },

    {
      key: "version",
      width: 48,
      render: (_: any, item) => (
        <Flex justify="center">
          <Tag color="success">v{item.version}</Tag>
        </Flex>
      ),
    },
    {
      key: "status",
      render: (_: any, item) => (
        <>
          <StatusSteps status={item.status} />
        </>
      ),
      align: "center",
    },
    {
      title: "",
      key: "action",
      render: (_: any, item) => (
        <>
          <Button
            danger
            type="default"
            style={{
              width: "32",
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled={item.status >= SoftwareReleaseInterationStatus.CANCELLED}
            onClick={() => onActionPress(item)}
            icon={<CloseCircleFilled />}
          />
        </>
      ),
      width: 32,
      align: "center",
    },
  ];
  return (
    <Table scroll={{ x: true }} columns={columns as any} dataSource={list} />
  );
}
