import React from 'react';
import { list } from './constant/index';
import { RedirectList } from './ui/RedirectList';

export function Redirect() {
  return (
    <section className="w-full rounded-3xl shadow-customGaryShadow mt-44">
      <div className="flex justify-between p-10">
        <RedirectList data={list[0]} line={true} />
        <RedirectList data={list[1]} />
      </div>
    </section>
  );
}
