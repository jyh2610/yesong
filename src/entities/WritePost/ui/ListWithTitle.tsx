import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

export function ListWithTitle({ children, title }: Props) {
  return (
    <li className="flex border border-t-1">
      <span className="w-2/12 bg-gray-100 p-2 text-center">{title}</span>
      <div className="w-full p-2">{children}</div>
    </li>
  );
}
