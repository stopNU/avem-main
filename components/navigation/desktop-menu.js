import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import NavLink from "./nav-link";

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  list-style: none;
  li {
    a {
      color: ${({ theme, dark }) => (dark ? theme.colors.headings : "#FFF")};
    }
  }
`;

const DesktopMenu = ({ navItems, className, dark }) => {
  return (
    <Menu className={className} dark={dark}>
      {navItems.length > 0 &&
        navItems.map((item) => (
          <li key={item.link.id}>
            <NavLink link={item.link}>{item.label}</NavLink>
          </li>
        ))}
    </Menu>
  );
};

export default DesktopMenu;
