'use client';
import { Checkbox } from '@nextui-org/checkbox';
import { Button, Radio } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { initialData, usePostData } from './hooks/usePostData';
import { IPostData, PostState } from './type';
import { ListWithTitle } from './ui/ListWithTitle';
import { ReactQuillEditor } from './ui/ReactQuillEditor';

export function WritePost() {
  const {
    postData,
    setPostData,
    postDashBoardHandler,
    setUploadImage,
    uploadImage
  } = usePostData();
  const router = useRouter();

  const handleFileChange = (index: number, file: File | null) => {
    setUploadImage(prev => {
      const newFiles = [...prev];
      newFiles[index] = file;
      return newFiles;
    });
  };

  return (
    <>
      <ul className="w-full">
        <ListWithTitle title="제목">
          <input
            value={postData.title}
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
            <ReactQuillEditor setPostData={setPostData} />
          </div>
        </ListWithTitle>
        <ListWithTitle title="링크 #1">
          <input
            value={postData.links[0]}
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
            value={postData.links[1]}
            onChange={e =>
              setPostData((prev: PostState) => ({
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
            onChange={e => handleFileChange(0, e.target.files?.[0] ?? null)}
            placeholder="파일을 선택하세요."
          />
          {uploadImage.map((file, index) => (
            <div key={index}>
              <span>{file?.name}</span>
              <button>삭제</button>
            </div>
          ))}
          {postData.files &&
            postData.files.map((file, index) => (
              <div key={index}>
                <span>{file?.fileName}</span>
                <button>삭제</button>
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
        <Button color="success" onClick={postDashBoardHandler}>
          등록하기
        </Button>
      </div>
    </>
  );
}
