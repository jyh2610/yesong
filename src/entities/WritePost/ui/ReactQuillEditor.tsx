'use client';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export function ReactQuillEditor() {
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
    <>
      <ReactQuill
        modules={modules}
        style={{ width: '100%', height: '300px' }}
      />
    </>
  );
}
