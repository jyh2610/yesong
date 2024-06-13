import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { LoginModal } from '@/entities';

const loginLists: { [key: string]: React.ReactNode } = {
  홈: (
    <>
      <Link href="/">
        <GoHomeFill size={22} />
      </Link>
      <span className=" text-brandSize font-medium">홈</span>
    </>
  ),
  이메일: (
    <>
      <Link href="/">
        <IoMdMail size={22} />
      </Link>
      <span className=" text-brandSize font-medium">이메일</span>
    </>
  ),
  관리자: (
    <>
      <MdManageAccounts size={22} />
      <LoginModal />
    </>
  )
};

export function LoginHeader() {
  return (
    <ul className="w-full flex justify-end gap-10 mt-5">
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
