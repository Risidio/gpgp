// Contribute Hero Section

export interface IContributeHeroProps {
  contents: IContributeHeroData;
  HeroContent: {
    heading: string;
    subheading?: string;
    HeroLegend?: string[];
  };
  classes: {
    container?: string;
    image?: string;
    heading?: string;
    subheading?: string;
    paragraph?: string;
  };
}

interface IContributeHeroData{
  contribute1: { text: string }[];
  "hero-content": { text: string }[];
  "hero-content2": { text: string }[];
  "hero-content3": { text: string }[];
}
