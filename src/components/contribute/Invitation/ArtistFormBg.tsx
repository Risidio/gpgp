const ArtistFormBg = ({children}: {children: React.ReactNode}) => {
  return (
       <div className="min-h-[400px] w-full bg-artist-contribute-mobile-wave md:bg-artist-contribute-wave bg-no-repeat bg-cover md:min-h-[1000px] xxl:pt-[113px] md:pt-[10px]">
         {children}
      </div>
   )
}

export default ArtistFormBg;