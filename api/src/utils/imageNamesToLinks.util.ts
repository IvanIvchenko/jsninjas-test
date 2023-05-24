import 'dotenv/config.js';

export const imageNamesToLinks = (
  data: string[] | string,
): string | string[] => {
  if (typeof data === 'string') {
    return `${process.env.URL}/public/${data}`;
  } else {
    return data.map((image) => {
      return `${process.env.URL}/public/${image}`;
    });
  }
};
