import { IContents } from "..";

// Hero Section
export interface IHomeHeroData extends IContents {
  title2: { text: string }[];
  title3: { text: string }[];
  button: { text: string }[];
  button2: { text: string }[];
}

export interface IHomeHeroSectionProp {
  contents: IHomeHeroData;
}


// Exhibition Section

export interface IHomeExhibitionData extends IContents {
  title: { text: string }[];
  description: { text: string }[];
  button: { text: string }[];
  button2: { text: string }[];
}

export interface IHomeExhibitionSectionProp {
  contents: IHomeExhibitionData;
}

// HomeExhibition Section
// export interface IHomeExhibitionData extends IContents {
//   image: string;
// }
// export interface IHomeExhibition2SectionProp {
//   contents: IHomeExhibitionData;
// }

export interface IHomeExhibition2Data {
  image: string; // Assuming 'image' is a URL or a path to the image
}

// Use IHomeExhibitionData directly in IHomeExhibition2SectionProp
export interface IHomeExhibition2SectionProp {
  contents: IHomeExhibitionData;
}