'use client';
import { useRef, useState } from 'react';

export function useUploadContentImg() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const quillRef = useRef<any>();

  return { quillRef };
}
