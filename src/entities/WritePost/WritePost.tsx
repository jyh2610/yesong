'use client';

import { Button } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { replaceHTML } from '@/shared';
import { extractSrc } from '@/shared/utils/replaceHTML';
import { uploadEditorImage } from './api';
import { initialData, usePostData } from './hooks/usePostData';
import { useUploadContentImg } from './hooks/useUploadContentImg';
import { ListWithTitle } from './ui/ListWithTitle';
import { ReactQuillEditor } from './ui/ReactQuillEditor';
import { formatFileSize } from './utills';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '';

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
      const content = postData.content;

      const updatedContent = replaceHTML(content, uploadedImageUrls);

      setPostData(prev => ({
        ...prev,
        content: updatedContent
      }));
      return updatedContent;
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const dashBoardPostHandler = async () => {
    try {
      const content = await postQuillImage();
      const finalContent = extractSrc(content || '')
        ? content
        : postData.content;

      console.log(content);

      await postDashBoardHandler(finalContent || '');
    } catch (error) {
      console.error('Error posting dashboard:', error);
    }
  };

  const handleImgBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (file: File) => {
    setUploadImage(prev => [...prev, file]);
  };

  const handleLinkChange = (
    index: number,
    field: 'url' | 'comment',
    value: string
  ) => {
    setPostData(prev => ({
      ...prev,
      links: prev.links.map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      )
    }));
  };

  return (
    <>
      <h1 className="font-semibold text-5xl mb-4">{title}</h1>
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
          <div>
            <input
              value={postData.links[0]?.comment || ''}
              onChange={e => handleLinkChange(0, 'comment', e.target.value)}
              className="bg-gray-100 w-full p-1"
              type="text"
              placeholder="코멘트를 입력하세요."
            />
            <input
              value={postData.links[0]?.url || ''}
              onChange={e => handleLinkChange(0, 'url', e.target.value)}
              className="bg-gray-100 w-full p-1 mt-2"
              type="url"
              placeholder="링크를 입력하세요."
            />
          </div>
        </ListWithTitle>
        <ListWithTitle title="링크 #2">
          <div>
            <input
              value={postData.links[1]?.comment || ''}
              onChange={e => handleLinkChange(1, 'comment', e.target.value)}
              className="bg-gray-100 w-full p-1"
              type="text"
              placeholder="코멘트를 입력하세요."
            />
            <input
              value={postData.links[1]?.url || ''}
              onChange={e => handleLinkChange(1, 'url', e.target.value)}
              className="bg-gray-100 w-full p-1 mt-2"
              type="url"
              placeholder="링크를 입력하세요."
            />
          </div>
        </ListWithTitle>
        <ListWithTitle title="파일">
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="*"
              onChange={e => handleFileChange(e.target.files?.[0] as File)}
              placeholder="파일을 선택하세요."
              style={{ display: 'none' }}
            />
            <Button onClick={handleImgBoxClick}>파일을 선택하세요</Button>
          </div>
          <div className="pl-2 py-4 w-1/2">
            {uploadImage.length > 0 &&
              uploadImage.map((file, index) => (
                <div key={index} className="flex justify-between gap-2 py-1">
                  <span>{file?.name}</span>
                  <div>
                    <span>{formatFileSize(file.size)}/30MB</span>
                  </div>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => removeUploadImage(index)}
                  >
                    삭제
                  </Button>
                </div>
              ))}
            {postData.files &&
              postData.files.map((file, index) => (
                <div key={index} className="flex justify-between gap-2 py-1">
                  <span>{file?.fileName}</span>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => removeExistingImg(file.id)}
                  >
                    삭제
                  </Button>
                </div>
              ))}
          </div>
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
