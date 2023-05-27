import { Router } from 'express';

import { SuperheroController } from '../controllers/superhero.controller.js';
import { errorHandler } from '../middleware/errorHandler.js';
import { uploadEditPictures, uploadNewPictures } from '../middleware/multer.js';
import { superheroValidator } from '../middleware/superheroValidator.js';
import { SuperheroService } from '../services/superhero.service.js';

const superheroController = new SuperheroController(new SuperheroService());

const superheroRouter = Router();

// Create a New superhero
superheroRouter.post(
  '/',
  uploadNewPictures.array('image', 5),
  superheroValidator,
  superheroController.create.bind(superheroController),
  errorHandler,
);

// Retrieve ALL superheroes
superheroRouter.get(
  '/',
  superheroController.findAll.bind(superheroController),
  errorHandler,
);

// Retrieve SINGLE superhero w/ID
superheroRouter.get(
  '/:id',
  superheroController.findOne.bind(superheroController),
  errorHandler,
);

//Update a superhero w/ID
superheroRouter.put(
  '/:id',
  uploadEditPictures.array('image', 5),
  superheroController.update.bind(superheroController),
  errorHandler,
);

//Delete a superhero w/ID
superheroRouter.delete(
  '/:id',
  superheroController.deleteOne.bind(superheroController),
  errorHandler,
);

export { superheroRouter };
