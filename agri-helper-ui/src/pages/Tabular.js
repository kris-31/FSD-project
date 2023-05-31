import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./table.css";

function Tabular() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (text) => <a>{text}</a>,
    },
    
    {
      title: 'TITLE',
      dataIndex: 'title',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (text) => <img src={text} alt="Image" style={{ width: 100, height: 100 }} />,
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
    },
    {
      title: 'DownloadLINK',
      dataIndex: 'url',
      render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">Download</a>,
    },
  ];

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8084/api/articles")
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result || []);
      });
  }, []);

  return (
    <div className="a1">
      <h2>SUCCESS STORIES OF INDIAN FARMERS</h2>
      <Table className="ant_table_cell" columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default Tabular;
