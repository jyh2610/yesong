import { Checkbox } from '@nextui-org/checkbox';
import { ListWithTitle } from './ui/ListWithTitle';
import { ReactQuillEditor } from './ui/ReactQuillEditor';

export function WritePost() {
  return (
    <ul>
      <ListWithTitle title="옵션">
        <Checkbox defaultSelected>공지</Checkbox>
      </ListWithTitle>
      <ListWithTitle title="제목">
        <input type="text" placeholder="제목을 입력하세요." />
      </ListWithTitle>
      <ListWithTitle title="제목">
        <div className="w-full h-[360px] p-2">
          <ReactQuillEditor />
        </div>
      </ListWithTitle>
      <ListWithTitle title="링크 #1">
        <input
          className="bg-gray-100 w-full p-1"
          type="url"
          placeholder="링크를 입력하세요."
        />
      </ListWithTitle>
      <ListWithTitle title="링크 #2">
        <input
          className="bg-gray-100 w-full p-1"
          type="url"
          placeholder="링크를 입력하세요."
        />
      </ListWithTitle>
      <ListWithTitle title="파일 #1">
        <input type="file" placeholder="제목을 입력하세요." />
      </ListWithTitle>
      <ListWithTitle title="파일 #2">
        <input type="file" placeholder="제목을 입력하세요." />
      </ListWithTitle>
    </ul>
  );
}
