'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Radio,
  RadioGroup,
  Pagination
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import AdminButton from './ui/AdminButton';
const rows = [
  {
    key: '1',
    number: 1,
    title: 'titles',
    writer: 'yesong',
    date: '2024-01-01',
    count: 24
  },
  {
    key: '2',
    number: 2,
    title: 't222itles123123123123',
    writer: 'yes22ong',
    date: '2024-01-01',
    count: 2422
  },
  {
    key: '3',
    number: 3,
    title: 'titles',
    writer: 'yesong',
    date: '2024-01-01',
    count: 24
  },
  {
    key: '4',
    number: 4,
    title: 't222itles123123123123',
    writer: 'yes22ong',
    date: '2024-01-01',
    count: 2422
  },
  {
    key: '5',
    number: 5,
    title: 'titles',
    writer: 'yesongfads',
    date: '2024-01-01',
    count: 24
  },
  {
    key: '6',
    number: 6,
    title: 't222itles123123123123',
    writer: 'yes22ong',
    date: '2024-01-01',
    count: 2422
  },
  {
    key: '7',
    number: 7,
    title: 'titles',
    writer: 'yesong',
    date: '2024-01-01',
    count: 24
  },
  {
    key: '8',
    number: 8,
    title: 't222itles123123123123',
    writer: 'yes22ong',
    date: '2024-01-01',
    count: 2422
  },
  {
    key: '9',
    number: 9,
    title: 'titles',
    writer: 'yesasdfong',
    date: '2024-01-01',
    count: 24
  },
  {
    key: '10',
    number: 10,
    title: 't222itles123123123123',
    writer: 'yes22ongasdf',
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
  const [selectionBehavior, setSelectionBehavior] = useState<
    'toggle' | 'replace'
  >('toggle');
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const pages = Math.ceil(rows.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page]);

  return (
    <div className="mt-10 flex flex-col gap-3">
      <AdminButton />
      <Table
        aria-label="Rows actions table example with dynamic content"
        selectionMode="multiple"
        selectionBehavior={selectionBehavior}
        classNames={{
          base: 'max-h-[520px]',
          wrapper: 'min-h-[222px]'
        }}
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={page => setPage(page)}
            />
          </div>
        }
        // onRowAction={key => alert(`Opening item ${key}...`)}
      >
        <TableHeader columns={columns}>
          {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        {rows.length === 0 ? (
          <TableBody emptyContent={'게시물이 없습니다.'}>{[]}</TableBody>
        ) : (
          <TableBody items={items}>
            {item => (
              <TableRow key={item.key}>
                {columnKey => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
    </div>
  );
}
