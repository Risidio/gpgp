import { IContents, IImage } from "..";

export interface INewsHeroProps {
  contents: INewsHeroData;
}

interface INewsHeroData {
  newsheading: { text: string }[];
  newsimage1: IImage;
  newscaption1: { text: string }[];
  newsimage2: IImage;
  newscaption2: { text: string }[];
  newsimage3: IImage;
  newscaption3: { text: string }[];
  newsimage4: IImage;
  newscaption4: { text: string }[];
  newsimage5: IImage;
  newscaption5: { text: string }[];
}

// News Stories
export interface INewsStoriesProps {
  contents: Array<INewsStoriesData>;
}

export interface INewsStoriesData {
  newsimage: { url: string }; // Assuming newsimage has a 'url' property
  newscaption: Array<{ text: string }>;
}