import { Product } from "./types";

export const sortProductsByStringMatch = (
  item: Product[],
  sortByKey: string,
  match: string
) => {
  const normalizedMatch = match.toLocaleLowerCase();
  return [
    ...item.sort(
      (a: Record<string, any>, b: Record<string, any>) =>
        b[sortByKey].toLocaleLowerCase().indexOf(normalizedMatch) -
        a[sortByKey].toLocaleLowerCase().indexOf(normalizedMatch)
    ),
  ];
};

export const sortProductsByValue = (
  item: Product[],
  sortByKey: string,
  isAscending: boolean
) => {
  return [
    ...item.sort((a: Record<string, any>, b: Record<string, any>) =>
      isAscending ? a[sortByKey] - b[sortByKey] : b[sortByKey] - a[sortByKey]
    ),
  ];
};
