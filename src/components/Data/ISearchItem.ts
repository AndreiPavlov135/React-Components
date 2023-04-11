export interface ISearchItem {
  title?: string;
  url: string;
  date?: string;
  select?: string;
  statistics: { [key: string]: string };
}

export type FormFields = {
  title: string;
  inputImg: FileList;
  date: string;
  select: string;
  statistics: { [key: string]: string };
  inputCheckBox: string;
};
