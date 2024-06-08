import { useRouter } from 'next/navigation';
import { dropList, pathMapping } from '../../constant';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const dropListValue = Object.values(dropList);

export function Dropdown({ setIsOpen }: Props) {
  const router = useRouter();
  const navigatePage = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div className=" w-2/3 ml-auto bg-white z-10 ">
      <ul className="flex justify-center items-start gap-1">
        {dropListValue.map((list, index) => (
          <li key={index} className="w-full">
            {list.map(listItem => (
              <p
                key={listItem}
                className="py-1 pl-1 text-center hover:text-brand-400 rounded cursor-pointer whitespace-nowrap"
                onClick={() => navigatePage(pathMapping[listItem])}
              >
                {listItem}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
