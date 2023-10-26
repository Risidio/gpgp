export const getFooterDetail = (routeToFind: string) => {
    const whiteFooterPaths = [
        {
            route: "/",
            style: "sm:bg-gpgp-blue bg-white",
            hrStyle: "sm:bg-white bg-gpgp-blue",
        },
        {
            route: "/contribute",
            style: "bg-white",
            hrStyle: ""
        },
        {
            route: "/contribute/inviteArtist",
            style: "bg-white",
            hrStyle: ""
        },
        {
            route: "/contribute/inviteSponsor",
            style: "bg-white",
            hrStyle: ""
        }        
    ]

    for (const path of whiteFooterPaths) {
       if(path.route == routeToFind) {
          return path;
       } 
    }

    return "";
}