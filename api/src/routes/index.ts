import { Router } from 'express';

import { superheroRouter } from './superhero.router.js';

const router = Router();

router.use('/superhero', superheroRouter);

export { router as routes };
