export interface File {
  fileName: string;
  fileURL: string;
}

export interface IGetPost {
  id: number;
  title: string;
  content: string;
  category: string;
  links: string[];
  files: File[];
  author: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
}
