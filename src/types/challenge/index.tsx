import { IContents } from "..";

export interface IChallengeHero extends IContents {
  subtitle: { text: string }[];
  button1: { text: string }[];
  button2: { text: string }[];
}

export interface IChallengeHeroProp {
  contents: IChallengeHero;
}
