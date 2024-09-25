import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../styles/theme";

export const HeroContainer = styled.section`
  color: ${colors.white};
  padding-top: ${rem(22)};
  min-height: ${rem(466)};
  background: url("/images/hero-bg.svg") no-repeat center 100%;
  background-size: cover;
  margin-bottom: ${rem(40)};
`;

export const HeroInner = styled.div`
  display: grid;
  justify-content: center;
  gap: ${rem(21)};
  grid-template-columns: ${rem(326)} minmax(auto, ${rem(437)});
`;

export const HeroImage = styled.img`
  --size: ${rem(326)};
  width: var(--size);
  height: var(--size);
`;

export const HeroTexts = styled.div`
  margin-top: ${rem(40)};
`;

export const HeroTitle = styled.h1`
  position: relative;
  top: ${rem(4)};
  margin-bottom: ${rem(56)};

  span {
    color: ${colors.darkOrange};
  }
`;

export const HeroText = styled.p`
  span {
    font-weight: 600;
  }
`;
