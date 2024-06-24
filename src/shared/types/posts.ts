export interface IFile {
  fileName: string;
  fileURL: string;
}

export interface IGetPost {
  id: number;
  title: string;
  content: string;
  category: string;
  links: string[];
  files: [IFile, IFile];
  author: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
}

export interface IGetPostData {
  totalPages: number;
  totalElements: number;
  size: number;
  content: IGetPost[];
}
