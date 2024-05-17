'use client';

import { useState } from 'react';

function useDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return { isOpen, setIsOpen };
}

export default useDropDown;
