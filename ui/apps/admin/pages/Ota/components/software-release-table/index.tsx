import React, { useMemo } from "react";
import { Button, Table } from "antd";
import { useWindowDimensions } from "@ui/shared/hooks/useWindowDimensions";
import { SoftwareRelease } from "@ui/shared/domain/entities/SoftwareRelease";

export type STationTableProps = {
  onActionPress: Function;
  list: SoftwareRelease[];
};

export function SoftwareReleaseTable({ onActionPress, list }) {

  const { width } = useWindowDimensions();
  const isMobile = useMemo(() => width < 756, [width]);
  
  const columns = [
    {
      title: "Versão",
      dataIndex: "version",
      key: "version",
      width: 100,
    },
    {
      title: "Titulo",
      dataIndex: "title",
      key: "title",
      width: 280,
    },
   /*  {
      title: "",
      key: "action",
      render: (_: any, item) => (
        <>
          <Button
            type="default"
            style={{
              width: 42,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => onActionPress(item)}
            icon={
              <span>
                edit 
              </span>
            }
          />
        </>
      ),
      width: 56,
      align: "center",
    }, */
  ];

 /*  const mobileColumns = [
    {
      title: "Imagem",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_: any, item) => (
        <img className="station-cell-avatar" src={item.imagePreviewUrl} />
      ),
    },
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "",
      key: "Visualizar",
      render: (_: any, item) => (
        <Button
          style={{
            width: 42,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="primary"
          onClick={() => handleClickView(item)}
          icon={
            <span>
              <Icon name="eye" size={18} color="white" />
            </span>
          }
        />
      ),
      width: 32,
      align: "center",
    },
    {
      title: "",
      key: "action",
      width: 32,
      render: (_: any, item) => (
        <>
          <Button
            type="default"
            style={{
              width: 42,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => handleClickEdit(item)}
            icon={
              <span>
                <Icon name="edit" size={18} color="#888" />
              </span>
            }
          />
        </>
      ),
      align: "center",
    },
  ]; */
  return (
    <Table
      scroll={{ x: true }}
      columns={(columns) as any}
      dataSource={list}
    />
  );
}
