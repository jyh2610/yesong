import { useRouter } from 'next/navigation';
import { getFullPath } from '@/shared';
import { dropList, pathMapping, IPathMapping } from '../../constant';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const dropListValue = Object.entries(dropList);
export function Dropdown({ setIsOpen }: Props) {
  const router = useRouter();

  const navigatePage = (parentKey: string, childKey: string) => {
    setIsOpen(false);
    const parentPath = pathMapping[parentKey]?.path;
    const child = pathMapping[parentKey]?.children?.[childKey];

    const fullPath = getFullPath(parentPath, child);

    router.push(fullPath);
  };
  return (
    <div className="w-2/3 ml-auto bg-white z-10">
      <ul className="flex justify-center items-start gap-1">
        {dropListValue.map(([parentKey, list], index) => (
          <li key={index} className="w-full">
            {list.map(listItem => (
              <p
                key={listItem}
                className="py-1 pl-1 text-center hover:text-brand-400 rounded cursor-pointer whitespace-nowrap"
                onClick={() => navigatePage(parentKey, listItem)}
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
