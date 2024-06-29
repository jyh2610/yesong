export const formatMultiform = (data: File[]) => {
  const formData = new FormData();

  data.forEach((image, index) => {
    formData.append('photo', image);
  });

  return formData;
};
