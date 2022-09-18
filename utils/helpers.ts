import { ParseDateType } from "../models/Other.models";

export const parseDate: ParseDateType = (dbDate: string) => {
  const date = new Date(Date.parse(dbDate));
  return `${date.toLocaleDateString()} o ${date.getHours()}:${date.getMinutes()}`;
};
