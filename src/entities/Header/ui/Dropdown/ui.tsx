import { dropList } from '../../constant';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const dropListValue = Object.values(dropList);

export function Dropdown({ setIsOpen }: Props) {
  return (
    <div className=" w-2/3 ml-auto bg-white z-10 ">
      {/* <ul className="flex justify-center grid grid-cols-6  items-start gap-1"> */}
      <ul className="grid grid-cols-6  items-start gap-1">
        {dropListValue.map((list, index) => (
          <li key={index} className="w-full">
            {list.map(listItem => (
              <p
                key={listItem}
                className="py-1 pl-1 text-center hover:text-brand-400 rounded cursor-pointer whitespace-nowrap"
                onClick={() => setIsOpen(false)}
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
