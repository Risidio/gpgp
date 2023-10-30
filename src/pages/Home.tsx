import Hero from '../components/Hero'
import Exhibition from '../components/home/Exhibition'
import HomeContent from '../components/home/HomeContent'
import Container from '../components/Container'
import HomeExhibition from '../components/home/HomeExhibition'
import Artist from '../components/home/Artist'
import BackgroundWave from '../components/BackgroundWave'
import ContactUs from '../components/ContactUs'

const Home = () => {
    return (
        <>
           <Container>
               <Hero/>
           </Container>

           <BackgroundWave/>

           <section className="bg-gpgp-blue">
              <Exhibition/>
           </section>

           <div className="sm:block hidden">
              <HomeExhibition />
           </div>

           <Container>
               <HomeContent/>
           </Container>

           <Container>
               <Artist/>
           </Container>

           <div className="sm:hidden block">
              <div className="font-semibold text-base text-center pt-20 uppercase">
                  <p>contribute to the global effort</p>
                  <p className="py-3">Create a better world</p>
              </div>
           </div>

           <div className="sm:pt-0 pt-20">
               <BackgroundWave/>
           </div>

           <Container sectionClass="bg-gpgp-blue" classes="bg-gpgp-blue">
               <ContactUs/>
           </Container>
       </>
  )
}

export default Home