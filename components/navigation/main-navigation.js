import Link from "next/link";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "./nav-link";

const Header = styled.header`
  height: 72px;
  width: 100%;
  position: fixed;
  transition: border-bottom 0.5s;
  z-index: 999;
  opacity: 1;
  background: ${(props) =>
    props.isScrolled ? props.theme.colors.background : "0 0"};
  border-bottom: ${(props) =>
    props.isScrolled
      ? `2px solid ${props.theme.colors.primary}`
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
      color: #fff;
      a {
        background: linear-gradient(270deg, #7f38ca 0%, #ffaca7 161.51%);
        padding: 12px 24px;
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
    <Header isScrolled={isScrolled}>
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
