import { IContributeHeroProps } from "../../types/contribute";
import Wrapper from "../layout/Wrapper";
import MyLink from "../base/MyLink";
// import MyLink from "../base/MyLink";

export default function NewContributeHero({
  classes: {
    container = "",
    image = "",
    heading = "",
    subheading = "",
    paragraph = "",
  },
  contents,
}: IContributeHeroProps) {
  // const HeroContent = [
  //   contents?.["hero-content"][0].text,
  //   contents?.["hero-content2"][0].text,
  //   contents?.["hero-content3"][0].text,
  // ];

  return (
    <Wrapper>
      <div className="xl:grid xl:grid-cols-2 xl:mt-[124px]">
        {/* First column */}
        <div className="">
          {/* Mobile */}
          <div className="xl:hidden text-center mt-[59.68px]">
            <h1 className="text-gpgp-blue text-[24px] xl:text-[80px] font-[be-vietnam-700] uppercase text-center xl:text-left leading-[35.402px] xl:leading-[90px]">
              Contribute
              <br />
              <span className="text-white header-text-stroke">
                to the global effort &nbsp;
              </span>
              <span className="hidden xl:inline-flex text-white xl:text-gpgp-blue  header-text-stroke  xl:header-text-no-stroke xl:ml-[-18px]">
                global
              </span>
              <span className="xl:hidden text-white xl:text-gpgp-blue  header-text-stroke  xl:header-text-no-stroke xl:ml-[-18px]">
                <br />
              </span>
              <span className="action-header xl:text-white header-text-stroke">
                create a better world
              </span>
            </h1>
          </div>
          {/* Web */}
          <div className="hidden xl:block mr-[62px]">
            <h1 className="h-[337px] text-gpgp-blue text-[48px] font-[be-vietnam-700] uppercase text-right leading-[57.6px] tracking-[2.4px]">
              Contribute to
              <br />
              <span className="text-white header-text-stroke font-[be-vietnam-700-bold]">
                the global effort
              </span>
              <span className="hidden xl:inline-flex text-white xl:text-gpgp-blue  header-text-stroke xl:header-text-no-stroke text-[96px] mt-[20px]">
                Create
              </span>
              <br />
              <span className="xl:hidden text-white xl:text-gpgp-blue  header-text-stroke  xl:header-text-no-stroke xl:ml-[-18px]">
                <br />
              </span>
              <span className="action-header xl:text-white header-text-stroke font-[be-vietnam-700-bold]">
                a better world
              </span>
            </h1>
          </div>
        </div>

        {/* Second column */}
        <div className="">
          {/* Mobile */}
          <div className="xl:hidden">
            <div className="text-center font-[be-vietnam] bold-400 text-[16px] leading-[32px] w-[293px] mx-auto mt-[40px]">
              <p>
                The Great Pacific Garbage Patch Art Project is an exciting
                initiative that welcomes both artists and investors to join us
                in making a profound impact on the environment. Together, we can
                create a harmonious blend of creativityand capital to tackle one
                ofthe planet's most pressingenvironmental challenges.
              </p>
              <p className="mt-[5px]">
                Join us on this remarkable journey to combat the Great Pacific
                Garbage Patch through the transformative power of art and
                investment.
              </p>
            </div>
            <div className="mt-[42px] flex flex-col gap-y-[16px] items-center">
              <MyLink
                to="/contribute/inviteSponsor"
                className="w-[216px] h-[49px] bg-white text-gpgp-blue"
              >
                <p className="text-[11px] font-[be-vietnam] bold-700 leading-[16.226px] tracking-[3.025px] uppercase text-center">
                  Contribute as an investor
                </p>
              </MyLink>
              <MyLink
                to="/contribute/inviteArtist"
                className="w-[216px] h-[49px] bg-gpgp-blue text-white"
              >
                <p className="text-[11px] font-[be-vietnam] bold-700 leading-[16.226px] tracking-[4.025px] uppercase text-center">
                  Contribute as an artist
                </p>
              </MyLink>
            </div>
          </div>
          {/* Web */}
          <div className="hidden xl:block">
            <div className="w-[622px] font-[be-vietnam] bold-400 leading-[32px]">
              <p className="tracking-[1px]">
                The Great Pacific Garbage Patch Art Project isan exciting
                initiative that welcomes both artists and investors to join us
                in making a profound impact on the environment.
              </p>
              <p className="mt-[20px] tracking-[1px]">
                Together, we can create a harmonious blend of creativityand
                capital to tackle one of the planet's most pressing
                environmental challenges.
              </p>
              <p className="mt-[20px] tracking-[1px]">
                Join us on this remarkable journey to combat the Great Pacific
                Garbage Patch through the transformativepower of art and
                investment.
              </p>
            </div>
            <div className="w-[622px]">
              <div className="flex flex-col gap-y-[14px] mt-[30px]">
                <MyLink
                  to="/contribute/inviteSponsor"
                  className="h-[63px] text-gpgp-blue bg-white rounded-[1px]"
                >
                  <p className="text-center font-[be-vietnam] bold-700 leading-[23.602px] uppercase tracking-[4.4px]">
                    Contribute as an investor
                  </p>
                </MyLink>
                <MyLink
                  to="/contribute/inviteArtist"
                  className="h-[63px] text-white bg-gpgp-blue rounded-[1px]"
                >
                  <p className="text-center font-[be-vietnam] bold-700 leading-[23.602px] uppercase tracking-[4.4px] hover:text-white">
                    Contribute as an artist
                  </p>
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
