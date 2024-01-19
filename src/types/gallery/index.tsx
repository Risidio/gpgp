// gallery hero

import { IContents, IImage } from "..";


export interface IGalleryHeroData extends IContents {
  subtitle: { text: string }[];
  subtitle2: { text: string }[];
}
export interface IGalleryHeroProps {
  contents: IGalleryHeroData;
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

// Bottom Wave Section For Mobile
export interface IGalleryWave {
  heading1: { text: string }[]; 
  heading2: { text: string }[]; 
}

export interface IGalleryWaveProp {
  contents: IGalleryWave
}