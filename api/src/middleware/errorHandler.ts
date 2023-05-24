import { Request, Response } from 'express';

import { ResponseError } from '../utils/interfaces.js';

export const errorHandler = (
  error: ResponseError,
  req: Request,
  res: Response,
): void => {
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).json({ message: error.message });
};
