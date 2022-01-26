import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { RichText } from "prismic-reactjs";
import { device } from "../../utils/breakpoints";
import Link from "next/link";
import BackgroundImage from "./background-image";

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.large};
    padding-bottom: ${({ theme, submenu }) =>
      submenu ? 0 : theme.sections.default};
  }
  background-color: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    70.08deg,
    #55208c 0%,
    #5d2497 7.74%,
    #6429a3 15.72%,
    #6c2dae 23.55%,
    #7432ba 31.44%,
    #9135b8 41.76%,
    #aa3ab6 51.37%,
    #c042b4 59.62%,
    #dd57a7 70.53%,
    #e765a3 76.65%,
    #ef729f 84.9%,
    #fa8f9f 92.77%,
    #ffaca7 100%
  );
  color: #fff;
`;

const Headline = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 620px;
  > * {
    color: #fff;
  }
  p {
    margin-top: 24px;
  }
`;

const SubMenu = styled.div`
  display: none;
  @media ${device.mobile} {
    display: flex;
  }
  justify-content: center;
  position: relative;
  margin-top: 150px;
  .item {
    padding: 16px 14px;
    @media ${device.tablet} {
      padding: 16px 14px;
    }
    @media ${device.desktop} {
      padding: 16px 24px;
    }
    font-weight: 800;
    font-size: 1rem;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 8px 8px 0px 0px;
    }
  }
`;

const HeroSimple = ({ title, subtitle, submenuItems, backgroundImage }) => {
  const hasSubMenu = submenuItems?.length > 0;

  const subMenuEl = hasSubMenu ? (
    <SubMenu>
      {submenuItems.map((item) => (
        <Link key={item} href={`#${item.toLowerCase().replace(/\s/g, "")}`}>
          <a className="item">{item}</a>
        </Link>
      ))}
    </SubMenu>
  ) : null;

  return (
    <Section submenu={hasSubMenu}>
      {backgroundImage && (
        <BackgroundImage src={backgroundImage} alt="Background image" />
      )}
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
          {subtitle && <RichText render={subtitle} />}
        </Headline>
        {subMenuEl}
      </ContentWrapper>
    </Section>
  );
};

export default HeroSimple;
