const whiteFooterPaths = [
  {
    route: "/contribute",
    style: "bg-white",
    fontColor: "black",
    fontColorMobile: "text-black",
    hrStyle: "",
  },
  {
    route: "/contribute/inviteArtist",
    style: "bg-white",
    fontColor: "black",
    fontColorMobile: "text-black",
    hrStyle: "",
  },

  {
    route: "/contribute/inviteSponsor",
    style: "bg-white",
    fontColor: "black",
    fontColorMobile: "text-black",
    hrStyle: "",
  },
  {
    route: "/contact",
    style: "bg-white",
    fontColor: "black",
    fontColorMobile: "text-black",
    hrStyle: "",
  },
  {
    route: "/",
    style: "sm:bg-gpgp-blue bg-white",
    fontColor: "white",
    fontColorMobile: "sm:text-white text-black",
    hrStyle: "sm:bg-white bg-gpgp-blue",
  },
];

export const getFooterDetail = (routeToFind: string) => {
  for (const path of whiteFooterPaths) {
    if (path.route === routeToFind) {
      return path;
    }
  }

  return null;
};

export const renderFooterColour = (routeToFind: string) => {
  const paths = ["/project", "/challenge","/gallery"];

  for (const path of paths) {
    if (routeToFind === path) return "text-white";
  }

  return "text-black";
};
