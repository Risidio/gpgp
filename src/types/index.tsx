// general interfaces

export interface IImage {
  alt: string;
  dimensions: { width: number; height: number };
  url: string;
}

export interface IContents {
  title: { text: string }[];
  image: IImage;
}
