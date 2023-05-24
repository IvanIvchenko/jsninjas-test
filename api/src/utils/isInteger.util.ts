export const isInteger = (num: string): boolean => {
  const n = Number(num);
  return n > 0 && n % parseInt(num as string) === 0;
};
