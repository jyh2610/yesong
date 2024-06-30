'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { replaceHTML } from '@/shared';
import { uploadEditorImage } from './api';
import { initialData, usePostData } from './hooks/usePostData';
import { useUploadContentImg } from './hooks/useUploadContentImg';
import { ListWithTitle } from './ui/ListWithTitle';
import { ReactQuillEditor } from './ui/ReactQuillEditor';

export function WritePost() {
  const {
    postData,
    setPostData,
    postDashBoardHandler,
    setUploadImage,
    uploadImage,
    removeExistingImg,
    removeUploadImage
  } = usePostData();
  const router = useRouter();
  const { quillRef } = useUploadContentImg();
  const [quillUploadImage, setQuillUploadImage] = useState<File[]>([]);

  const postQuillImage = async () => {
    try {
      const results = await Promise.allSettled(
        quillUploadImage.map(image => uploadEditorImage([image]))
      );

      const uploadedImageUrls: string[] = [];
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          uploadedImageUrls.push(result.value.photoUrl);
        } else {
          console.error('Error uploading image:', result.reason);
        }
      });
      const editor = quillRef.current?.getEditor();
      const content = postData.content;
      const updateContent = replaceHTML(content, uploadedImageUrls);

      setPostData(prev => ({
        ...prev,
        content: updateContent
      }));
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  const dashBoardPostHandler = async () => {
    try {
      postQuillImage();

      postDashBoardHandler();
    } catch (error) {
      console.error('Error posting dashboard:', error);
    }
  };

  const handleFileChange = (file: File) => {
    setUploadImage(prev => [...prev, file]);
  };

  return (
    <>
      <ul className="w-full">
        <ListWithTitle title="제목">
          <input
            value={postData.title || ''}
            className="bg-gray-100 w-full p-1"
            onChange={e =>
              setPostData(prev => ({
                ...prev,
                title: e.target.value
              }))
            }
            type="text"
            placeholder="제목을 입력하세요."
          />
        </ListWithTitle>
        <ListWithTitle title="내용">
          <div className="w-full h-[360px] p-2">
            <ReactQuillEditor
              setQuillUploadImage={setQuillUploadImage}
              postData={postData}
              setPostData={setPostData}
            />
          </div>
        </ListWithTitle>
        <ListWithTitle title="링크 #1">
          <input
            value={postData.links[0] || ''}
            onChange={e =>
              setPostData(prev => ({
                ...prev,
                links: [e.target.value, prev.links[1]]
              }))
            }
            className="bg-gray-100 w-full p-1"
            type="url"
            placeholder="링크를 입력하세요."
          />
        </ListWithTitle>
        <ListWithTitle title="링크 #2">
          <input
            value={postData.links[1] || ''}
            onChange={e =>
              setPostData(prev => ({
                ...prev,
                links: [prev.links[0], e.target.value]
              }))
            }
            className="bg-gray-100 w-full p-1"
            type="url"
            placeholder="링크를 입력하세요."
          />
        </ListWithTitle>
        <ListWithTitle title="파일">
          <input
            type="file"
            accept="image/*"
            onChange={e => handleFileChange(e.target.files?.[0] as File)}
            placeholder="파일을 선택하세요."
          />
          {uploadImage.length > 0 &&
            uploadImage.map((file, index) => (
              <div key={index}>
                <span>{file?.name}</span>
                <button onClick={() => removeUploadImage(index)}>삭제</button>
              </div>
            ))}
          {postData.files &&
            postData.files.map((file, index) => (
              <div key={index}>
                <span>{file?.fileName}</span>
                <button onClick={() => removeExistingImg(file.id)}>삭제</button>
              </div>
            ))}
        </ListWithTitle>
      </ul>
      <div className="w-full mt-4 flex justify-end gap-2">
        <Button
          color="danger"
          onClick={() => {
            router.back();
            setPostData(initialData);
          }}
        >
          취소하기
        </Button>
        <Button color="secondary" onClick={dashBoardPostHandler}>
          등록하기
        </Button>
      </div>
    </>
  );
}
