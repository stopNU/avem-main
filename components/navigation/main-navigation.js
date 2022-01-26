import Link from "next/link";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "./nav-link";

const Header = styled.header`
  height: 50px;
  @media ${device.mobile} {
    height: 72px;
  }
  width: 100%;
  position: fixed;
  transition: border-bottom 0.5s;
  z-index: 999;
  opacity: 1;
  background: ${({ isScrolled, dark, theme }) =>
    isScrolled && !dark
      ? "linear-gradient(70.08deg, rgb(85, 32, 140) 0%, rgb(93, 36, 151) 7.74%, rgb(100, 41, 163) 15.72%, rgb(108, 45, 174) 23.55%, rgb(116, 50, 186) 31.44%, rgb(145, 53, 184) 41.76%, rgb(170, 58, 182) 51.37%, rgb(192, 66, 180) 59.62%, rgb(221, 87, 167) 70.53%, rgb(231, 101, 163) 76.65%, rgb(239, 114, 159) 84.9%, rgb(250, 143, 159) 92.77%, rgb(255, 172, 167) 100%)"
      : isScrolled && dark
      ? theme.colors.background
      : "0 0"};
  border-bottom: ${({ isScrolled, dark, theme }) =>
    isScrolled && !dark
      ? `2px solid #F8F8F8`
      : isScrolled && dark
      ? `2px solid ${theme.colors.primary}`
      : "2px solid transparent"};
`;

const NavBar = styled.nav`
  display: none;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    ul {
      display: flex;
      justify-content: center;
      column-gap: 20px;
      list-style: none;
      li {
        a {
          color: ${({ theme, dark }) =>
            dark ? theme.colors.headings : "#FFF"};
        }
      }
    }
    .btn-wrapper {
      display: flex;
      justify-content: end;
      color: ${({ dark }) => (dark ? "#FFF" : "#000")};
      a {
        background: ${({ dark, theme }) =>
          !dark
            ? `linear-gradient(90deg, #FFFFFF 0%, ${theme.colors.secondary} 100%)`
            : `linear-gradient(270deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 161.51%)`};
        padding: 12px 24px;
        font-weight: 700;
        border-radius: 24px;
      }
    }
  }
`;

const MainNavigation = (props) => {
  const { logo, dark, navItems, button } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Header isScrolled={isScrolled} dark={dark}>
      <NavBar dark={dark}>
        <Link href="/">
          <a>
            {logo?.url ? (
              <Image
                src={logo.url}
                alt={logo.alt}
                width={logo.dimensions.width}
                height={logo.dimensions.height}
              />
            ) : (
              "Avem"
            )}
          </a>
        </Link>
        <ul>
          {navItems.length > 0 &&
            navItems.map((item) => (
              <li key={item.link.id}>
                <NavLink link={item.link}>{item.label}</NavLink>
              </li>
            ))}
        </ul>
        <div className="btn-wrapper">
          <NavLink link={button.highlighted_link}>
            {button.highlighted_label}
          </NavLink>
        </div>
      </NavBar>
    </Header>
  );
};

export default MainNavigation;
