// general interfaces

interface IImage {
  alt: string;
  dimensions: { width: number; height: number };
  url: string;
}

interface IContents {
  title: { text: string }[];
  image: IImage;
}

// project hero

export interface IProjectHeroProps {
  contents: IProjectHeroData;
}

export interface IProjectHeroData {
  project_title: { text: string }[];
  project_subtitle: { text: string }[];
  project_subtitle2: { text: string }[];
  gpgp_image: IImage;
}

// about

export interface IAboutProps {
  contents: IAboutData;
}

export interface IAboutData {
  title: { text: string }[];
  subtitle: { text: string }[];
}

// what is gpgp section

export interface IGpgpSectionProps {
  contents: IGpgpData;
}

export interface IGpgpData extends IContents {
  firstparagraph: { text: string }[];
  secondparagraph: { text: string }[];
  button: string;
}

// attention

export interface IAttentionSectionProps {
  contents: IAttentionData;
}

export interface IAttentionData extends IContents {
  firstparagraph: { text: string }[];
  secondparagraph: { text: string }[];
  thirdparagraph: { text: string }[];
}

// exhibition

export interface IExhibitionSectionProps {
  contents: IExhibitionData;
}

export interface IExhibitionData extends IContents {
  firstparagraph: { text: string }[];
  secondparagraph: { text: string }[];
  button: string;
}

// join us

export interface IJoinSectionProps {
  contents: IJoinData;
}

export interface IJoinData extends IContents {
  firstparagraph: { text: string }[];
  secondparagraph: { text: string }[];
  firstbutton: string;
  secondbutton: string;
}
