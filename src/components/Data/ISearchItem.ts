export interface ISearchItem {
  title?: string;
  url: string;
  date?: string;
  select?: string;
  statistics: { [key: string]: string };
}
