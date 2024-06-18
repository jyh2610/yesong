import { IPostData } from '@/entities/WritePost/type';

export const generateFormData = (data: IPostData): FormData => {
  const formData = new FormData();
  formData.append(
    'postCreateDTO',
    new Blob(
      [
        JSON.stringify({
          title: data.title,
          content: data.content,
          category: data.category,
          links: data.links
        })
      ],
      { type: 'application/json' }
    )
  );

  return formData;
};
