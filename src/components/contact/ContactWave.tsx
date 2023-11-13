const ContactWave = ({children}: {children: React.ReactNode}) => {
  return (
       <div className="min-h-[400px] w-full bg-white md:bg-white bg-no-repeat bg-cover md:min-h-[1000px] md:pt-[10px]">
         {children}
      </div>
   )
}

export default ContactWave;
