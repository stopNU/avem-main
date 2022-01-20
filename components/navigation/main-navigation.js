import Link from "next/link";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { useState, useEffect } from "react";
//import Logo from "./logo";

const Header = styled.header`
  height: 72px;
  width: 100%;
  position: fixed;
  transition: border-bottom 0.5s;
  z-index: 999;
  opacity: 1;
  background: ${(props) => (props.isScrolled ? "#FFF" : "0 0")};
  border-bottom: ${(props) =>
    props.isScrolled ? "2px solid green" : "2px solid transparent"};
`;

const NavBar = styled.nav`
  display: none;
  @media ${device.tablet} {
    display: flex;
    max-width: ${({ theme }) => theme.breakpoints.tabletxl};
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    ul {
      display: flex;
      column-gap: 20px;
      list-style: none;
      li {
        a {
          color: ${({ theme }) => theme.colors.headings};
        }
      }
    }
  }
`;

const MainNavigation = () => {
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
      <NavBar>
        <Link href="/">
          <a>Logo</a>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button>App</button>
      </NavBar>
    </Header>
  );
};

export default MainNavigation;
