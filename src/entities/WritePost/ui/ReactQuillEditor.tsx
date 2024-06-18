'use client';
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction } from 'react';
import 'react-quill/dist/quill.snow.css';
import { IPostData } from '../type';

// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Define the props for the editor component
interface ReactQuillEditorProps {
  setPostData: Dispatch<SetStateAction<IPostData>>;
}

export function ReactQuillEditor({ setPostData }: ReactQuillEditorProps) {
  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
      [
        {
          color: []
        },
        { background: [] }
      ]
    ]
  };

  return (
    <ReactQuill
      modules={modules}
      style={{ width: '100%', height: '300px' }}
      onChange={content =>
        setPostData(prev => ({
          ...prev,
          content: content
        }))
      }
    />
  );
}
