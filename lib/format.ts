export const formatDate = (date: string | any) => {
  return new Intl.DateTimeFormat().format(date);
};
