'use client';
import { Checkbox } from '@nextui-org/checkbox';
import { usePostData } from './hooks/usePostData';
import { ListWithTitle } from './ui/ListWithTitle';
import { ReactQuillEditor } from './ui/ReactQuillEditor';

export function WritePost() {
  const { postData, setPostData, postDashBoardHandler } = usePostData();

  return (
    <>
      <button>뒤로가기</button>
      <ul className="w-full">
        <ListWithTitle title="옵션">
          <Checkbox>공지</Checkbox>
        </ListWithTitle>
        <ListWithTitle title="제목">
          <input
            value={postData.title}
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
          <input type="file" placeholder="파일을 선택하세요." />
        </ListWithTitle>
        <ListWithTitle title="파일 #2">
          <input type="file" placeholder="파일을 선택하세요." />
        </ListWithTitle>
        <button onClick={postDashBoardHandler}>등록하기</button>
      </ul>
    </>
  );
}
