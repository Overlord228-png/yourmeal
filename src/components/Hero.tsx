import Container from "./Container";
import Header from "./Header";
import {
  HeroContainer,
  HeroInner,
  HeroImage,
  HeroTexts,
  HeroTitle,
  HeroText,
} from "../styles/HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <Header />
      <Container>
        <HeroInner>
          <HeroImage
            src="/images/burger.svg"
            alt="Бургер"
            aria-label="Бургер"
          />
          <HeroTexts>
            <HeroTitle className="h1">
              Только самые <span>сочные бургеры!</span>
            </HeroTitle>
            <HeroText className="text">
              Бесплатная доставка от <span>599₽</span>
            </HeroText>
          </HeroTexts>
        </HeroInner>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
