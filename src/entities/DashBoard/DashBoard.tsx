'use client';

import { Divider, Radio, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  number: string;
  title: string;
  writer: string;
  date: string;
  count: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '번호',
    dataIndex: 'number',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: '제목',
    dataIndex: 'title'
  },
  {
    title: '글쓴이',
    dataIndex: 'writer'
  },
  {
    title: '날짜',
    dataIndex: 'date'
  },
  {
    title: '조회',
    dataIndex: 'count'
  }
];

const data: DataType[] = [
  {
    key: '1',
    number: '1',
    title: 'John Brown',
    writer: 'John Brown',
    date: '2023-01-01',
    count: 32
  }
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.number === 'Disabled User', // Column configuration not to be checked
    name: record.number
  })
};

export function DashBoard() {
  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
