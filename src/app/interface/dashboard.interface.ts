export type PageSizes = Array<number | { label: string; value: number }>;

export interface TableDataSource<T = any> {
  data: T[];
  collectionSize: number;
  page?: number;
}

export enum DataViews {
  Table = "table",
  Grid = "grid",
  List = "list",
}
