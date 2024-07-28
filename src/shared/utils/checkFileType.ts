const imageExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'webp',
  'tiff',
  'svg'
];

export const checkFileType = (fileName: string | undefined): boolean => {
  if (!fileName) {
    return false;
  }

  const fileExtension = fileName.split('.').pop()?.toLowerCase();

  return fileExtension ? imageExtensions.includes(fileExtension) : false;
};
