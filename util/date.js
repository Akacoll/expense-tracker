export const getFormattedDate = (date) => {
  return `${date.getDate() + 1}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
