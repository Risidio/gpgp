import BackgroundWave from '../components/BackgroundWave'
import Container from '../components/Container'
import { NewsList } from '../components/news/NewsList'

export const News = () => {
  return (
    <>
        <BackgroundWave/>
        <section className="flex flex-col items-center bg-gpgp-blue text-white">
            <h1 className="text-bold text-2xl py-5">
               News
             </h1>
        </section>

        <Container>
          <NewsList/>
       </Container>

       <BackgroundWave/>
    </>
  )
}
