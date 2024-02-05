export const isCorrectDate = (date: Date): boolean => {
  return date instanceof Date && isFinite(+date);
};
