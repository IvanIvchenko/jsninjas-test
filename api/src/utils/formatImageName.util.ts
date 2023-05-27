export const formatImageName = (
  nickname: string,
  file: Express.Multer.File,
): string => {
  return (
    nickname.split(' ').join('_') +
    '_' +
    Date.now() +
    '.' +
    file.mimetype.split('/').at(-1)
  );
};
