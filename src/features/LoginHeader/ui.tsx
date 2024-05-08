import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';

const loginLists: { [key: string]: React.ReactNode } = {
  홈: <GoHomeFill />,
  이메일: <IoMdMail />,
  관리자: <MdManageAccounts />
};

export function LoginHeader() {
  return (
    <ul className="w-full flex justify-end gap-2">
      {Object.entries(loginLists).map(([item, icon]) => (
        <li key={item} className="text-center flex items-center gap-1">
          {icon}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
