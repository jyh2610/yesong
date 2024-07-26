import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { LoginModal } from '@/entities';

export function LoginHeader() {
  const loginLists: { [key: string]: React.ReactNode } = {
    홈: (
      <>
        <Link href="/" className="flex gap-2">
          <GoHomeFill size={22} />
          <span className=" text-brandSize font-medium">홈</span>
        </Link>
      </>
    ),
    관리자: (
      <>
        <MdManageAccounts size={22} />
        <LoginModal />
      </>
    )
  };
  return (
    <ul className="w-full flex justify-end gap-10 mt-5 ">
      {Object.entries(loginLists).map(([item, icon]) => (
        <li
          key={item}
          className="text-center flex items-center gap-1 cursor-pointer"
        >
          {icon}
        </li>
      ))}
    </ul>
  );
}
