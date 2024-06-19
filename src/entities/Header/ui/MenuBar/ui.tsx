import { dropList } from '../../constant';

const menuLists = Object.keys(dropList);

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuBar({ setIsOpen }: Props) {
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      className="w-full h-12 cursor-pointer"
    >
      <ul className="w-full h-full flex justify-between items-center">
        {menuLists.map(menu => (
          <li
            key={menu}
            className="w-[125px] whitespace-nowrap h-full text-2xl font-medium cursor-pointer flex items-center justify-center"
          >
            <span>{menu}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
