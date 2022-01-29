import NavLink from "./nav-link";
import styled from "styled-components";
import Image from "next/image";
import { device } from "../../utils/breakpoints";
import { CSSTransition } from "react-transition-group";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 24px;
`;

const MenuIcon = styled(GiHamburgerMenu)`
  height: 100%;
  font-size: 1.4rem;
  color: ${({ dark }) => (dark ? "#000" : "#FFF")};
  cursor: pointer;
  @media ${device.mobile} {
    display: none;
  }
`;

const CloseIcon = styled.div`
  font-size: 1.4rem;
  color: #000;
`;

const Dialog = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0px;
  transform: none;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  height: 100%;
  outline: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  .root {
    background-color: rgb(255, 255, 255);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
      rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    margin: 0px;
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    max-height: none;
    max-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  &.slide-enter {
    height: 0;
  }
  &.slide-enter-active {
    height: 100%;
    transition: all 200ms ease-in;
  }
  &.slide-exit {
    height: 100%;
  }
  &.slide-exit-active {
    height: 0;
    transition: all 200ms ease-in;
  }
`;

const Menu = styled.div`
  text-align: center;
  ul {
    list-style: none;
    li {
      margin: 20px;
      a{
        font-size: 1rem;
      }
    }
  }
`;

const MobileMenu = ({ className, children, dark, navItems, logo }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = () => {
    setShowMenu(true);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <div className={className}>
      <MenuIcon onClick={handleOpen} dark={dark} />

      <CSSTransition
        in={showMenu}
        timeout={200}
        classNames="slide"
        unmountOnExit
      >
        <Dialog>
          <div className="root">
            <Header>
              <a className="logo">
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
              <CloseIcon>
                <MdOutlineClose onClick={handleClose} />
              </CloseIcon>
            </Header>
            <Menu>
              <ul>
                {navItems.length > 0 &&
                  navItems.map((item) => (
                    <li key={item.link.id}>
                      <NavLink link={item.link}>{item.label}</NavLink>
                    </li>
                  ))}
              </ul>
              {children}
            </Menu>
          </div>
        </Dialog>
      </CSSTransition>
    </div>
  );
};

export default MobileMenu;
