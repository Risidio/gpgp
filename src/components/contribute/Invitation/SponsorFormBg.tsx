const SponsorFormBg = ({children}: {children: React.ReactNode}) => {
  return (
       <div className="min-h-[400px] w-full bg-sponsor-contribute-mobile-wave md:bg-sponsor-contribute-wave bg-no-repeat bg-cover md:min-h-[1000px] md:pt-[10px]">
         {children}
      </div>
   )
}

export default SponsorFormBg;