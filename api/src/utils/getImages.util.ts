export const getImagesFilenames = (files: Express.Multer.File[]): string[] => {
  return files.map((file) => {
    if (file.fieldname !== 'mainImage') {
      return file.filename;
    }
    return;
  });
};
