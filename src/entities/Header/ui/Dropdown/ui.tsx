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
    <div className="absolute w-full bg-white z-50 flex justify-center">
      <div className="w-[1360px]">
        <div className="flex justify-between  m-auto">
          <div className="w-[300px] h-14 relative" />
          <ul className="w-2/3 h-full flex justify-between items-center">
            {dropListValue.map(([parentKey, list], index) => (
              <li
                key={index}
                className="w-[125px] h-full text-font-gray hover:text-brand-400 text-xl font-medium cursor-pointer flex items-center justify-end flex-col text-end"
              >
                {list.map((listItem, listItemIndex) => (
                  <span
                    key={listItemIndex}
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
