import { IContents } from "..";

// Hero Section
export interface IHomeHeroData extends IContents {
  title2: { text: string }[];
  title3: { text: string }[];
  button: { text: string }[];
  button2: { text: string }[];
  mobiletitle: { text: string }[];
  pretitle: { text: string }[];
  // image: string;
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

export interface IHomeExhibition2Data {
  image: string;
}
export interface IHomeExhibition2SectionProp {
  contents: IHomeExhibitionData;
}

// HomeContent Section
export interface IHomeContentData extends IContents {
  title1: { text: string }[];
  title2: { text: string }[];
  title3: { text: string }[];
  button1: { text: string }[];
  button2: { text: string }[];
  button3: { text: string }[];
  button4: { text: string }[];
  description1: { text: string }[];
  description2: { text: string }[];
  description3: { text: string }[];
}

export interface IHomeContentSectionProp {
  contents: IHomeContentData;
}


// Artist Section
export interface IHomeArtist extends IContents {
  name: { text: string }[];
  title: { text: string }[];
  description: { text: string }[];
}

export interface IHomeArtistProp {
  contents: IHomeArtist
}
