import { IContents, IImage } from "..";

export interface IChallengeHero extends IContents {
  subtitle: { text: string }[];
  button1: { text: string }[];
  button2: { text: string }[];
}

export interface IChallengeHeroProp {
  contents: IChallengeHero;
}

export interface IChallengePlasticRevolution extends IContents {
  description: { text: string }[];
  description2: { text: string }[];
  description3: { text: string }[];
}

export interface IChallengePlasticRevolutionProp {
  contents: IChallengePlasticRevolution;
}

export interface IChallengeSection1 {
  heading1: { text: string }[];
  heading2: { text: string }[];
}

export interface IChallengeSection1Prop {
  contents: IChallengeSection1;
}

export interface IChallengeSection2 extends IContents {
  description1: { text: string }[];
  description2: { text: string }[];
  description3: { text: string }[];
  heading: { text: string }[];
  image2: IImage;
}

export interface IChallengeSection2Prop {
  contents: IChallengeSection2;
}

export interface IChallengeSection3 extends IContents {
  description1: { text: string }[];
  description2: { text: string }[];
  heading: { text: string }[];
}

export interface IChallengeSection3Prop {
  contents: IChallengeSection3;
}

export interface IChallengeSection4  {
  button: { text: string }[];
  description1: { text: string }[];
  description2: { text: string }[];
}

export interface IChallengeSection4Prop {
  contents: IChallengeSection4;
}
