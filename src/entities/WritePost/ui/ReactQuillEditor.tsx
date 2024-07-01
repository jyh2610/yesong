'use client';
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction, useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useUploadContentImg } from '../hooks/useUploadContentImg';
import { PostState } from '../type';

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function comp({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

interface ReactQuillEditorProps {
  postData: PostState;
  setPostData: Dispatch<SetStateAction<PostState>>;
  setQuillUploadImage: Dispatch<SetStateAction<File[]>>;
}

export function ReactQuillEditor({
  postData,
  setPostData,
  setQuillUploadImage
}: ReactQuillEditorProps) {
  const { quillRef } = useUploadContentImg();

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const files = input.files;
      if (files) {
        const fileArray = Array.from(files);
        setQuillUploadImage(prev => [...prev, ...fileArray]);

        fileArray.forEach(file => {
          const reader = new FileReader();
          reader.onload = () => {
            const quill = quillRef.current?.getEditor();
            const range = quill?.getSelection();
            if (range) {
              quill.insertEmbed(range.index, 'image', reader.result);
            }
          };
          reader.readAsDataURL(file);
        });
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
          [{ color: [] }, { background: [] }]
        ],
        handlers: {
          image: imageHandler
        }
      }
    }),
    []
  );

  return (
    <ReactQuill
      forwardedRef={quillRef}
      modules={modules}
      style={{ width: '100%', height: '300px' }}
      value={postData.content || ''}
      onChange={(content: string) => {
        setPostData(prev => ({
          ...prev,
          content: content
        }));
      }}
    />
  );
}
