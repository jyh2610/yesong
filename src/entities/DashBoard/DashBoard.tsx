'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination
} from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import { getPosts } from './api';
import { rows, columns } from './constant';
import AdminButton from './ui/AdminButton';

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

  // useEffect(() => {
  //   getPosts();
  // }, []);

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
