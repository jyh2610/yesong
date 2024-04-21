import React from 'react';

const loginLists = ['홈', '이메일', '관리자'];

export function LoginHeader() {
  return (
    <ul className="flex justify-end items-center gap-2 pr-4">
      {loginLists.map(item => (
        <li key={item} className="text-center w-16 p-2 hover:bg-pink-400">
          {item}
        </li>
      ))}
    </ul>
  );
}
