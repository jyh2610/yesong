export interface IPostData {
  title: string;
  content: string;
  links: [string, string];
  category: string;
  files: [File | null, File | null];
}
