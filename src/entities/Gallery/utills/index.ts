import { IGetPostData } from '@/shared';

export function extractFileURLs(postData: IGetPostData): string[] {
  return postData.content.flatMap(post => post.files.map(file => file.fileURL));
}
