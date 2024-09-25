import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../styles/theme";

export const FooterContainer = styled.footer`
  background: ${colors.white};
  padding-block: ${rem(46)} ${rem(40)};
  margin-top: auto;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${rem(32)};
  gap: ${rem(355)};
`;

export const FooterLogo = styled.img`
  display: block;
  width: ${rem(305)};
`;

export const FooterIconPhone = styled.img`
  display: block;
  width: ${rem(24)};
  height: ${rem(24)};
`;

export const FooterContacts = styled.ul`
  display: flex;
  gap: ${rem(126)};
  position: relative;
  top: ${rem(6)};
`;

export const FooterContactsItem = styled.li``;

export const FooterContactsTitle = styled.p`
  margin-bottom: ${rem(24)};
  font-size: ${rem(24)};
  line-height: 1;
`;

export const FooterContactsLink = styled.a`
  font-size: ${rem(16)};
  line-height: normal;
  text-decoration: none;
  color: ${colors.black};
  display: flex;
  gap: ${rem(4)};
`;

export const FooterSocials = styled.ul`
  display: flex;
  gap: ${rem(16)};
`;

export const FooterSocialsItem = styled.li``;

export const FooterSocialsItemLink = styled.a`
  display: inline-block;
  fill: ${colors.orange};
`;

export const FooterCopyright = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${rem(4)};
  font-size: ${rem(12)};
  line-height: normal;
`;
