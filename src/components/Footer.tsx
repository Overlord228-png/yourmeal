import Container from "./Container";
import { Icons } from "./Icons";
import {
  FooterContainer,
  FooterTop,
  FooterLogo,
  FooterIconPhone,
  FooterContacts,
  FooterContactsItem,
  FooterContactsTitle,
  FooterContactsLink,
  FooterSocials,
  FooterSocialsItem,
  FooterSocialsItemLink,
  FooterCopyright,
} from "../styles/FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterTop>
          <FooterLogo src="/images/logo-footer.svg" alt="YouMeal Logo" />
          <FooterContacts>
            <FooterContactsItem>
              <FooterContactsTitle>Номер для заказа</FooterContactsTitle>
              <FooterContactsLink href="tel:+79308333811">
                <FooterIconPhone src="/images/phone.svg" alt="Phone Icon" />
                <span>+7(930)833-38-11</span>
              </FooterContactsLink>
            </FooterContactsItem>
            <FooterContactsItem>
              <FooterContactsTitle>Мы в соцсетях</FooterContactsTitle>
              <FooterSocials>
                <FooterSocialsItem>
                  <FooterSocialsItemLink
                    href="https://vk.com"
                    target="_blank"
                    aria-label="VK"
                  >
                    <Icons name="vk" />
                  </FooterSocialsItemLink>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <FooterSocialsItemLink
                    href="https://t.me"
                    target="_blank"
                    aria-label="Telegram"
                  >
                    <Icons name="tg" />
                  </FooterSocialsItemLink>
                </FooterSocialsItem>
              </FooterSocials>
            </FooterContactsItem>
          </FooterContacts>
        </FooterTop>
        <FooterCopyright>
          <span>&copy;&nbsp;YouMeal, 2022</span>
          <span>Design: Anastasia Ilina</span>
        </FooterCopyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
