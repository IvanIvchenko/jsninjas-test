export const getImagesFilenames = (files: Express.Multer.File[]): string[] => {
  return files.map((file) => file.filename);
};
