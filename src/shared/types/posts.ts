export interface IFile {
  id: string;
  fileName: string;
  fileURL: string;
}

export interface ILink {
  url: string;
  comment: string;
}

export interface IGetPost {
  id: number;
  title: string;
  content: string;
  category: string;
  links: ILink[];
  files: IFile[];
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
