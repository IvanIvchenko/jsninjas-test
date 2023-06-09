// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { promises as fs } from 'fs';

import { Request } from 'express';

import { Superhero } from '../models/superhero.model.js';
import { getImagesFilenames } from '../utils/getImages.util.js';
import { imageNamesToLinks } from '../utils/imageNamesToLinks.util.js';
import {
  RequestBody,
  ResponseError,
  SuperheroFull,
  SuperheroShort,
} from '../utils/interfaces.js';
import { isInteger } from '../utils/isInteger.util.js';
import { IMAGES_FOLDER_PATH } from '../vars/consts/directory.js';

export class SuperheroService {
  async create(data: Request<{}, {}, RequestBody>): Promise<SuperheroFull> {
    const images = getImagesFilenames(data.files as Express.Multer.File[]);

    const newSuperhero = await Superhero.create({
      nickname: data.body.nickname,
      real_name: data.body.real_name,
      origin_description: data.body.origin_description,
      superpowers: data.body.superpowers,
      catch_phrase: data.body.catch_phrase,
      images: images,
    });

    if (newSuperhero) {
      return {
        ...newSuperhero.dataValues,
        images: imageNamesToLinks(newSuperhero.images),
      };
    } else {
      const err: ResponseError = new Error(
        'Error occured while creating a superhero',
      );
      err.statusCode = 500;
      throw err;
    }
  }

  async getRowNumber(): Promise<number> {
    const rowNumber = await Superhero.count();
    return rowNumber;
  }

  async findAll(page: number): Promise<SuperheroShort[]> {
    const superheroes: SuperheroShort[] = await Superhero.findAll({
      offset: (page - 1) * 5,
      limit: 5,
      attributes: ['id', 'nickname', 'images'],
      order: [['updatedAt', 'DESC']],
      raw: true,
    });
    if (superheroes) {
      return superheroes.map((superhero) => {
        return {
          ...superhero,
          images: imageNamesToLinks([superhero.images[0]]),
        };
      });
    } else {
      const err: ResponseError = new Error(
        'Error occured while retreaving superheroes',
      );
      err.statusCode = 500;
      throw err;
    }
  }

  async findOne(id: string): Promise<SuperheroFull> {
    if (!isInteger(id)) {
      const err: ResponseError = new Error('Invalid superhero id');
      err.statusCode = 400;
      throw err;
    }
    const superhero = await Superhero.findOne({
      where: { id: id },
      attributes: { exclude: ['createdAt, updatedAt'] },
      raw: true,
    });

    if (superhero) {
      return {
        ...superhero,
        images: imageNamesToLinks(superhero.images),
      };
    } else {
      const err: ResponseError = new Error(
        `No superhero with id=${id} was found`,
      );
      err.statusCode = 400;
      throw err;
    }
  }

  async deleteOne(id: number): Promise<void> {
    const superhero = await Superhero.findByPk(id);

    if (!superhero) {
      const err: ResponseError = new Error(
        `No superhero with id=${id} was found`,
      );
      err.statusCode = 400;
      throw err;
    }

    const superheroDestr = await Superhero.destroy({
      where: { id: id },
    });

    if (superheroDestr !== 1) {
      const err: ResponseError = new Error(
        `"Error deleting superhero with id=${id}`,
      );
      err.statusCode = 409;
      throw err;
    }

    await Promise.all(
      superhero.images.map((image) => fs.unlink(IMAGES_FOLDER_PATH + image)),
    );

    return;
  }

  async update(
    id: number,
    data: Request<{}, {}, RequestBody>,
  ): Promise<SuperheroFull> {
    if (!data.body.nickname) {
      const err: ResponseError = new Error(
        'Superhero nickname is required and was not provided',
      );
      err.statusCode = 500;
      throw err;
    }
    const images = getImagesFilenames(data.files as Express.Multer.File[]);

    const superhero = await Superhero.findOne({ where: { id: id } });

    if (images) {
      await Promise.all(
        superhero.images.map((image) => fs.unlink(IMAGES_FOLDER_PATH + image)),
      );
    }

    const updatedSuperhero = await superhero.update({
      nickname: data.body.nickname || superhero.nickname,
      real_name: data.body.real_name || superhero.real_name,
      origin_description:
        data.body.origin_description || superhero.origin_description,
      superpowers: data.body.superpowers || superhero.superpowers,
      catch_phrase: data.body.catch_phrase || superhero.catch_phrase,
      images: images || superhero.images,
    });

    if (updatedSuperhero) {
      return {
        ...updatedSuperhero,
        images: imageNamesToLinks(updatedSuperhero.images),
      };
    } else {
      const err: ResponseError = new Error(
        'Error occured while updating a superhero',
      );
      err.statusCode = 500;
      throw err;
    }
  }
}
