import { IContents } from "..";

export interface IHomeHeroData extends IContents {
  title2: { text: string }[];
  title3: { text: string }[];
  buton: { text: string }[];
}

export interface IHomeHeroProp {
  contents: IHomeHeroData;
}
