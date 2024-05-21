'use client';

import { useState } from 'react';

export function useDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return { isOpen, setIsOpen };
}
