import { ParseDateType } from "../models/Other.models";

export const parseDate: ParseDateType = (dbDate: string) => {
  const date = new Date(Date.parse(dbDate));
  const minutes = date.getMinutes();
  if (minutes >= 10) {
    return `${date.toLocaleDateString()} o ${date.getHours()}:${minutes}`;
  } else return `${date.toLocaleDateString()} o ${date.getHours()}:0${minutes}`;
};
