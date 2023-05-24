import { NextFunction, Request, Response } from 'express';

import { SuperheroService } from '../services/superhero.service.js';
import {
  RequestBody,
  RequestPageParams,
  RequestSuperheroParams,
} from '../utils/interfaces.js';
import { isInteger } from '../utils/isInteger.util.js';

export class SuperheroController {
  private superheroService: SuperheroService;

  constructor(superheroService: SuperheroService) {
    this.superheroService = superheroService;
  }

  async create(
    req: Request<{}, {}, RequestBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      res.status(200).json(await this.superheroService.create(req));
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error while creating superhero:', err.message);
        next(err);
      }
      console.error('Unknown error occured.');
      next(err);
    }
  }

  async findAll(
    req: Request<RequestPageParams, {}, {}>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const rowNumber = await this.superheroService.getRowNumber();
      const page = isInteger(req.query.page as string)
        ? Number(req.query.page)
        : 1;
      const foundSuperheroes = await this.superheroService.findAll(page);
      res
        .status(200)
        .set({ 'X-total-count': rowNumber })
        .json(foundSuperheroes);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error while retreaving superheroes:', err.message);
        next(err);
      }
      console.error('Unknown error occured.');
      next(err);
    }
  }

  async findOne(
    req: Request<RequestSuperheroParams, {}, {}>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      res.status(200).json(await this.superheroService.findOne(req.params.id));
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error while retreaving a superhero:', err.message);
        next(err);
      }
      console.error('Unknown error occured.');
      next(err);
    }
  }

  async update(
    req: Request<RequestSuperheroParams, {}, RequestBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      res
        .status(200)
        .json(await this.superheroService.update(Number(req.params.id), req));
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error while updating a superhero:', err.message);
        next(err);
      }
      console.error('Unknown error occured.');
      next(err);
    }
  }

  async deleteOne(
    req: Request<RequestSuperheroParams, {}, {}>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      res
        .status(204)
        .json(await this.superheroService.deleteOne(Number(req.params.id)));
    } catch (err) {
      if (err instanceof Error) {
        console.error(
          `Error while deleting superhero with id=${req.params.id}:`,
          err.message,
        );
        next(err);
      }
      console.error('Unknown error occured.');
      next(err);
    }
  }
}
