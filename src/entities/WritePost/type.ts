import { IFile } from '@/shared/types/posts';

export interface IPostData {
  title: string;
  content: string;
  links: string[];
  category: string;
  files: [File | null, File | null];
}

export interface PostState {
  title: string;
  content: string;
  links: string[];
  category: string;
  files: [IFile | null, IFile | null];
}
