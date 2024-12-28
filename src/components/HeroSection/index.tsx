import { Bio } from "../../data/dataContains";
import Typewriter from "typewriter-effect";
// import MyHeroImage from "@/assets/my_bio_pic.jpg";
import MyHeroImage from "@/assets/mypic-removebg-preview.png";
import HeroBgAnimation from "./HeroBgAnimation";
import { ScrollDown } from "../scrollbar";
import {
  HeroBG,
  HeroContainer,
  HeroContainerIN,
  HeroLeft,
  HeroRight,
  ResumeButton,
  Span,
  SubTitle,
  TextAnimation,
  Image,
} from "./HeroSectionStyle";
import { Title } from "./HeroSectionStyle";

const Index = () => {
  return (
    <>
      <HeroContainer id="About">
        <HeroBG>
          <HeroBgAnimation />
        </HeroBG>
        <HeroContainerIN>
          <HeroLeft>
            <Title>
              Hey 🙋‍♂️, I am <br /> {Bio.name}
            </Title>
            <TextAnimation>
              I am
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextAnimation>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Hire me!
            </ResumeButton>
          </HeroLeft>
          <HeroRight>
            <Image src={MyHeroImage} alt="hero section image" id="imageHero" />
          </HeroRight>
        </HeroContainerIN>
        <ScrollDown />
      </HeroContainer>
    </>
  );
};

export default Index;
