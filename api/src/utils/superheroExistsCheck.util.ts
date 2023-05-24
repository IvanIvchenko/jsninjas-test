import { Superhero } from '../models/superhero.model.js';

export const superheroExistsCheck = async (
  nickname: string,
): Promise<boolean> => {
  const superhero = await Superhero.findAll({ where: { nickname: nickname } });
  return !!superhero.length;
};
