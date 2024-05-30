import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';

export function SideMenu() {
  return (
    <div className="w-1/3 font-medium text-2x text-gray-700 ">
      <p className=" pb-3 border-b-2 border-brand-200 text-gray-800">
        센터소개
      </p>
      <p className="py-5">인삿말</p>
      <p>오시는길</p>
      <Info />
    </div>
  );
}

const Info = () => {
  return (
    <div className="p-5 bg-brand border border-brand-300 rounded-2xl text-gray-700 mt-14">
      <div className="text-center">
        <p className="text-gray-800">고객센터</p>
        <p className=" mt-2">언제든지 전화주시면 정성껏</p>
        <p>답변드리겠습니다.</p>
      </div>
      <div className="flex gap-2 mt-5">
        <IoMdCall size={24} color="#FA98D3" />
        <p className="text-brand-600">010-5763-7901</p>
      </div>
      <div className="flex gap-2 mt-3">
        <FaLocationDot size={24} color="#FA98D3" />
        <p>경기도 성남시 수정구 복정로 16번길 11, 103호</p>
      </div>
    </div>
  );
};
