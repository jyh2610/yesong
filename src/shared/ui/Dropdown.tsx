interface Props {
  data: string[];
}

export function Dropdown({ data }: Props) {
  return (
    <ul className="relative w-full bg-white  border border-black-solid rounded-sm z-10">
      {data.map(list => (
        <li key={list} className="text-center pt-1 p-2 hover:bg-pink-300">
          {list}
        </li>
      ))}
    </ul>
  );
}
