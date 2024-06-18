import { useRouter } from 'next/navigation';

function AdminButton() {
  const route = useRouter();

  return (
    <div className="flex justify-end">
      <div className="flex gap-2 text-white">
        <button className="bg-brand-300 rounded-md p-2">관리자</button>
        <button
          className="bg-gray-600 rounded-md p-2"
          onClick={() => route.push('/write')}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default AdminButton;
