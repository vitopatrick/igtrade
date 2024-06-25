export const formatDate = (date: string | any) => {
  return new Intl.DateTimeFormat().format(date);
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};
