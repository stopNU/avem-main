import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Image from "next/image";
import NavLink from "../navigation/nav-link";
import { RichText } from "prismic-reactjs";

import SocialMediaItem from "./social-media-item";

const Section = styled.section`
  padding: 40px 0;
  background-color: #f8f8f8;
  text-align: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 21px;
  margin-top: 24px;
  a {
    color: ${({ theme }) => theme.colors.headings};
  }
`;

const SocialMedia = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const Copyright = styled.div`
  mix-blend-mode: normal;
  opacity: 0.5;
  color: #1e2833;
  margin: 16px 0 12px;
  p {
    font-size: 0.75rem;
  }
`;

const Policies = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 0.75rem;
`;

const Footer = (props) => {
  const { logo, navItems, privacyPolicy, terms, copyright, socialMedia } =
    props;

  return (
    <Section>
      <ContentWrapper>
        {logo?.url && (
          <Image
            src={logo.url}
            alt={logo.alt}
            width={logo.dimensions.width}
            height={logo.dimensions.height}
          />
        )}

        <nav>
          <Menu>
            {navItems.length > 0 &&
              navItems.map((item) => (
                <li key={item.link.id}>
                  <NavLink link={item.link}>{item.label}</NavLink>
                </li>
              ))}
          </Menu>
        </nav>

        <SocialMedia>
          {socialMedia.length > 0 &&
            socialMedia.map((item, index) => (
              <li key={index}>
                <SocialMediaItem
                  platform={item.social_media_platform}
                  url={item.url.url}
                />
              </li>
            ))}
        </SocialMedia>

        <Copyright>
          <RichText render={copyright} />
        </Copyright>

        <Policies>
          {privacyPolicy.url && (
            <NavLink link={privacyPolicy}>Privacy Policy</NavLink>
          )}
          {terms.url && <NavLink link={terms}>Terms & Conditions</NavLink>}
        </Policies>
      </ContentWrapper>
    </Section>
  );
};

export default Footer;
