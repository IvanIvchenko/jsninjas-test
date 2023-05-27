import 'dotenv/config.js';

export const imageNamesToLinks = (data: string[]): string[] => {
  return data.map((image) => {
    return `${process.env.URL}/public/${image}`;
  });
};
