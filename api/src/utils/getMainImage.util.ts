import { ResponseError } from './interfaces';

export const getMainImageFilename = (
  mainImage: Express.Multer.File,
): string => {
  if (!mainImage) {
    const err: ResponseError = new Error(
      'Main image is required and was not provided',
    );
    err.statusCode = 500;
    throw err;
  }
  return mainImage.filename;
};
