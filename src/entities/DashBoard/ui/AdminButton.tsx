import React from 'react';

function AdminButton() {
  return (
    <div className="flex justify-between">
      <div>1/7</div>
      <div className="flex gap-2 text-white">
        <button className="bg-brand-300 rounded-md p-2">관리자</button>
        <button className="bg-gray-600 rounded-md p-2">글쓰기</button>
      </div>
    </div>
  );
}

export default AdminButton;
