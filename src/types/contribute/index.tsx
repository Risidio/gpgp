import { IContents, IImage } from "..";

// Contribute Hero Section

export interface IContributeHeroProps {
  contents: IContributeHeroData;
  // HeroContent: {
  //   heading: string;
  //   subheading?: string;
  //   HeroLegend?: string[];
  // };
  classes: {
    container?: string;
    image?: string;
    heading?: string;
    subheading?: string;
    paragraph?: string;
  };
}

interface IContributeHeroData {
  heading1: { text: string }[];
  heading2: { text: string }[];
  heading3: { text: string }[];
  heading4: { text: string }[];
  mobileheading1: { text: string }[];
  mobileheading2: { text: string }[];
  mobileheading3: { text: string }[];
  "hero-content": { text: string }[];
  "hero-content2": { text: string }[];
  "hero-content3": { text: string }[];
}

// Invitation  section

export interface IinvitaitonSectionProps {
  contents1: IinvitaitonArtistData;
  contents2: IinvitaitonSponsorData;
}

export interface IArtistInvitationProp {
  content: IinvitaitonArtistData;
}

export interface ISponsorInvitationProp {
  content: IinvitaitonSponsorData;
  onDragStart: any;
}

export interface IinvitaitonArtistData {
  // Artist
  artistheading: { text: string }[];
  artistimage: IImage;
  contentsubheading1: { text: string }[];
  artistcontent: { text: string }[];
  artistsecondcontent: { text: string }[];
}

interface IinvitaitonSponsorData {
  // sponsor
  sponsorheading: { text: string }[];
  sponsorimage: IImage;
  contentsubheading2: { text: string }[];
  sponsorcontent: { text: string }[];
}
