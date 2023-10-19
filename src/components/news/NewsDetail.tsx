import BackgroundWave from "../BackgroundWave";
import Container from "../Container";
import NewsInfo from "./NewsInfo";

const NewsDetail = () => {
  return (
    <>
         <div className="sm:block hidden">
           <BackgroundWave/>
        </div>

        <section className="flex flex-col items-center sm:bg-gpgp-blue sm:text-white">
            <h1 className="font-bold text-2xl py-5">
               News
             </h1>
        </section>

        <Container>
           <NewsInfo/>
        </Container>

        <BackgroundWave/>
    </>
  )
}
export default NewsDetail;

