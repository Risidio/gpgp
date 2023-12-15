import { IImage } from "..";

export interface IArticleDataProps {
  contents: IArticleData;
  items: IArticleMoreNewsData[];
}

export interface IArticleData {
  articletitle: { text: string }[];
  articleimage: IImage;
  articlecontent1: { text: string }[];
  articlecontent2: { text: string }[];
  articlecontent3: { text: string }[];
  morenews: { text: string }[];
}

export interface IArticleMoreNewsData {
  morenewscontent: { text: string }[];
  morenewsimage: IImage;
}
