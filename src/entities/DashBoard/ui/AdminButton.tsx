import Link from 'next/link';

function AdminButton() {
  return (
    <div className="flex justify-end">
      <div className="flex gap-2 text-white">
        <Link href={'/write'}>
          <button className="bg-gray-600 rounded-md p-2">글쓰기</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminButton;
