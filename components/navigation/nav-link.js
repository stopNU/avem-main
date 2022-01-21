import React from "react";
import styled from "styled-components";
import { default as NextLink } from "next/link";
import { Link } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const Wrapper = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`;

// Main DocLink component function for generating links to other pages on this site
const NavLink = ({ children, link }) => {
  if (link) {
    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === "Document") {
      return (
        <Wrapper>
          <NextLink href={linkResolver(link)}>
            <a>{children}</a>
          </NextLink>
        </Wrapper>
      );
    }

    // Otherwise return a normal anchor element
    return (
      <Wrapper>
        <a href={Link.url(link)} target={link.target}>
          {children}
        </a>
      </Wrapper>
    );
  }
  return null;
};

export default NavLink;
