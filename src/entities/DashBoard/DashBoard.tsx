'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from '@nextui-org/react';
const rows = [
  {
    number: 1,
    title: 'titles',
    writer: 'yesong',
    date: '2024-01-01',
    count: 24
  },
  {
    number: 2,
    title: 't222itles123123123123',
    writer: 'yes22ong',
    date: '2024-01-01',
    count: 2422
  }
];

const columns = [
  {
    key: 'number',
    label: '번호'
  },
  {
    key: 'title',
    label: '제목'
  },
  {
    key: 'writer',
    label: '글쓴이'
  },
  {
    key: 'date',
    label: '날짜'
  },
  {
    key: 'count',
    label: '조회'
  }
];
export function DashBoard() {
  return (
    <div className="flex flex-col gap-3">
      <Table
        selectionMode="single"
        aria-label="Example static collection table"
      >
        <TableHeader columns={columns}>
          {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {item => (
            <TableRow key={item.number} className="cursor-pointer">
              {columnKey => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
