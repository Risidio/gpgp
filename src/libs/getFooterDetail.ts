export const getFooterDetail = (routeToFind: string) => {
    const whiteFooterPaths = [
        {
            route: "/",
            style: "sm:bg-gpgp-blue bg-white",
            fontColor: "white",
            fontColorMobile: "text-black",
            hrStyle: "sm:bg-white bg-gpgp-blue",
        },
        {
            route: "/contribute",
            style: "bg-white",
            fontColor: "black",
            fontColorMobile: "text-black",
            hrStyle: ""
        },
        {
            route: "/contribute/inviteArtist",
            style: "bg-white",
            fontColor: "black",
            fontColorMobile: "text-black",
            hrStyle: ""
        },
        {
            route: "/contribute/inviteSponsor",
            style: "bg-white",
            fontColor: "black",
            fontColorMobile: "text-black",
            hrStyle: ""
        },
        {
            route: "/contact",
            style: "bg-white",
            fontColor: "black",
            fontColorMobile: "text-black",
            hrStyle: ""
        }             
    ]

    for (const path of whiteFooterPaths) {
       if(path.route === routeToFind) {
          return path;
       } 
    }

    return;
}