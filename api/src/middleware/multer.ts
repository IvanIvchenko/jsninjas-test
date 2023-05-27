import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

import { formatImageName } from '../utils/formatImageName.util.js';
import { RequestBody } from '../utils/interfaces.js';
import { superheroExistsCheck } from '../utils/superheroExistsCheck.util.js';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;
//type FileFilterCallback = (error: Error | null, accept: boolean) => void

// defining image storage location
const storageConfig = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback,
  ) => {
    return cb(null, './static/images');
  },
  filename: (
    req: Request<{}, {}, RequestBody>,
    file: Express.Multer.File,
    cb: FileNameCallback,
  ) => {
    return cb(null, formatImageName(req.body.nickname, file));
  },
});
// defining imagesave filters for superhero creation
const fileFilterCreate = async (
  req: Request<{}, {}, RequestBody>,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): Promise<void> => {
  // setTimeout(() => console.log(file), 0);
  const superheroExists = await superheroExistsCheck(req.body.nickname);
  if (
    !req.body.nickname ||
    !req.body.real_name ||
    !req.body.origin_description ||
    !req.body.superpowers ||
    !req.body.catch_phrase
  ) {
    return cb(null, false);
  }
  if (
    !superheroExists &&
    (file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg')
  ) {
    return cb(null, true);
  }
  return cb(null, false);
};
// defining imagesave filters for superhero edit
const fileFilterEdit = async (
  req: Request<{}, {}, RequestBody>,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): Promise<void> => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    return cb(null, true);
  } else {
    return cb(null, false);
  }
};

export const uploadNewPictures = multer({
  storage: storageConfig,
  fileFilter: fileFilterCreate,
});
export const uploadEditPictures = multer({
  storage: storageConfig,
  fileFilter: fileFilterEdit,
});
