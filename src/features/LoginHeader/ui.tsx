import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';

const loginLists: { [key: string]: React.ReactNode } = {
  홈: <GoHomeFill size={22} />,
  이메일: <IoMdMail size={22} />,
  관리자: <MdManageAccounts size={22} />
};

export function LoginHeader() {
  return (
    <ul className="w-full flex justify-end gap-10 mt-5">
      {Object.entries(loginLists).map(([item, icon]) => (
        <li key={item} className="text-center flex items-center gap-1">
          {icon}
          <span className=" text-brandSize font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}
