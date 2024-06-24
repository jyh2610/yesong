'use client';
import { Checkbox } from '@nextui-org/checkbox';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { initialData, usePostData } from './hooks/usePostData';
import { ListWithTitle } from './ui/ListWithTitle';
import { ReactQuillEditor } from './ui/ReactQuillEditor';

export function WritePost() {
  const { postData, setPostData, postDashBoardHandler } = usePostData();
  const router = useRouter();

  const handleFileChange = (index: number, file: File | null) => {
    setPostData(prev => {
      const newFiles = [...prev.files] as [File | null, File | null];
      newFiles[index] = file;
      return {
        ...prev,
        files: newFiles
      };
    });
  };

  return (
    <>
      <ul className="w-full">
        <ListWithTitle title="옵션">
          <Checkbox>공지</Checkbox>
        </ListWithTitle>
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
        <ListWithTitle title="파일 #1">
          <input
            type="file"
            onChange={e => handleFileChange(0, e.target.files?.[0] ?? null)}
            placeholder="파일을 선택하세요."
          />
        </ListWithTitle>
        <ListWithTitle title="파일 #2">
          <input
            type="file"
            onChange={e => handleFileChange(1, e.target.files?.[0] ?? null)}
            placeholder="파일을 선택하세요."
          />
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
