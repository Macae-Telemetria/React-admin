import React from "react";
import { Flex, Table, Tag } from "antd";
import { Station } from "@ui/shared/domain/entities/Station";

export type StationsTablePros = {
  onActionPress: Function;
  list: Station[];
};

export function StationsTable({
  list,
  onActionPress,
}: StationsTablePros) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 64,
    },
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
      width: 280,
    },
    {
      title: "Versao",
      key: "version",
      render: (_: any, item) => (
        <Flex justify="center">
          <Tag color={!item?.softwareVersion ? "error" : "cyan"}>
              {item.softwareVersion || "Legado"}
          </Tag>
        </Flex>
      ),
      width: 32,
      align: "center",
    },
  ];
  return (
    <Table scroll={{ x: true }} columns={columns as any} dataSource={list} />
  );
}
