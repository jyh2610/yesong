const menuLists = [
  '센터소개',
  '노인장기요양보험 안내',
  '이용안내',
  '커뮤니티',
  '자료실',
  '갤러리'
];

export function MenuBar() {
  return (
    <ul className="flex justify-evenly">
      {menuLists.map(menu => (
        <li key={menu} className="cursor-pointer">
          {menu}
        </li>
      ))}
    </ul>
  );
}
