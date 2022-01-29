import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { RichText } from "prismic-reactjs";
import { device } from "../../utils/breakpoints";
import BackgroundImage from "./background-image";
import { Link as ScrollLink, scroller } from "react-scroll";

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme, submenu }) =>
    submenu ? 0 : theme.sections.default};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.large};
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
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media ${device.mobile} {
    margin-top: 150px;
    position: relative;
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
  }

  .desk {
    display: none;
    @media ${device.mobile} {
      display: flex;
    }
  }

  .mobile {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    width: 100%;
    select {
      width: 100%;
      max-width: 330px;
      padding: 18px 24px;
      font-size: ${({ theme }) => theme.fontSizes.h6};
      font-weight: 700;
      border-radius: 10px;
      appearance: none;
      background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYXJldC1kb3duIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtZG93biBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiPjxwYXRoIGZpbGw9IiM4RTM0QjYiIGQ9Ik0zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6Ij48L3BhdGg+PC9zdmc+");
      background-repeat: no-repeat, repeat;
      background-position: right 0.7em top 50%, 0 0;
      background-size: 0.65em auto, 100%;
    }
    @media ${device.mobile} {
      display: none;
    }
  }
`;

const HeroSimple = ({ title, subtitle, submenuItems, backgroundImage }) => {
  const hasSubMenu = submenuItems?.length > 0;

  const handleChange = (event) => {
    scroller.scrollTo(event.target.value, {
      duration: 500,
      delay: 0,
      smooth: true,
    });
  };

  const subMenuEl = hasSubMenu ? (
    <SubMenu>
      <div className="desk">
        {submenuItems.map((item) => (
          <ScrollLink
            key={item}
            to={`${item.toLowerCase().replace(/\s/g, "")}`}
            spy={true}
            smooth={true}
            duration={500}
            className="item"
            style={{ cursor: "pointer" }}
          >
            {item}
          </ScrollLink>
        ))}
      </div>
      <div className="mobile">
        <select name="submenu_items" id="submenu_items" onChange={handleChange}>
          {submenuItems.map((item) => (
            <option
              value={`${item.toLowerCase().replace(/\s/g, "")}`}
              key={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
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
