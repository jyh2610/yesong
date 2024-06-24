import { useRouter } from 'next/navigation';
import { getFullPath } from '@/shared';
import { dropList, pathMapping } from '../../constant';

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
    <div
      onMouseLeave={() => setIsOpen(false)}
      className="absolute p-4 w-full bg-white z-50 flex justify-center"
    >
      <div className="w-[1360px]">
        <div className="flex justify-between m-auto">
          <div className="w-[300px] h-14 relative" />
          <ul className="w-2/3 h-full flex justify-between items-start">
            {dropListValue.map(([parentKey, list], index) => (
              <li
                key={index}
                className="w-[125px] h-full text-font-gray text-xl font-medium cursor-pointer flex items-center justify-center flex-col text-end"
              >
                {list.map((listItem, listItemIndex) => (
                  <span
                    key={listItemIndex}
                    className="hover:text-brand-400 mt-1"
                    onClick={() => navigatePage(parentKey, listItem)}
                  >
                    {listItem}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
