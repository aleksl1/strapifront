import { ParseDateType } from "../models/Other.models";

export const parseDate: ParseDateType = (dbDate: string) => {
  const date = new Date(Date.parse(dbDate));
  if (date.getMinutes() >= 10) {
    return `${date.toLocaleDateString()} o ${date.getHours()}:${date.getMinutes()}`;
  } else
    return `${date.toLocaleDateString()} o ${date.getHours()}:0${date.getMinutes()}`;
};
