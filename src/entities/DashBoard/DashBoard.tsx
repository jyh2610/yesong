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
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { tokenController } from '@/shared';
import { columns, menuMapping } from './constant';
import { useParsingData } from './model/useParsingData';
import AdminButton from './ui/AdminButton';

type MenuMappingKeys = keyof typeof menuMapping;
const rowsPerPage = 8;

export function DashBoard() {
  const route = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');

  const lastSegment = segments[segments.length - 1] as MenuMappingKeys;

  const [page, setPage] = useState(1);

  const { pages, parsedData } = useParsingData({
    page: page,
    category: menuMapping[lastSegment]
  });

  return (
    <div className="mt-10 flex flex-col gap-3">
      <AdminButton />
      <Table
        aria-label="table"
        selectionMode={'single'}
        selectionBehavior={'toggle'}
        onRowAction={key =>
          route.push(`/sub_page/detail/${menuMapping[lastSegment]}/${key}`)
        }
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
      >
        <TableHeader columns={columns}>
          {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        {parsedData && parsedData.length > 0 ? (
          <TableBody items={parsedData}>
            {item => (
              <TableRow key={item.id}>
                {columnKey => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        ) : (
          <TableBody emptyContent={'게시물이 없습니다.'}>{[]}</TableBody>
        )}
      </Table>
    </div>
  );
}
