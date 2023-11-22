// gallery hero

import { IContents, IImage } from "..";

export interface IGalleryHeroProps {
  contents: IGalleryHeroData;
}

export interface IGalleryHeroData extends IContents {
  subtitle: { text: string }[];
  subtitle2: { text: string }[];
}

// gallery information
export interface IGalleryAboutProps {
  contents: IGalleryAboutData;
}

export interface IGalleryAboutData {
  title: { text: string }[];
  firstparagraph: { text: string }[];
}

// gallery art works
export interface IGalleryArtworksProps {
  contents: Array<IGalleryArtWorkImageData>;
}

export interface IGalleryArtWorkImageData {
  image: IImage,
  imagetitle:string
}
