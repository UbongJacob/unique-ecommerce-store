export const formatNumber = (number: number | string | undefined) => {
  if (typeof number === "string") {
    if (number.includes(",")) return parseInt(number.replace(/,/g, ""));
    else return parseInt(number);
  } else return Number(number);
};
