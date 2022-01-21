import React from "react";
import { default as NextLink } from "next/link";
import { Link } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

// Main DocLink component function for generating links to other pages on this site
const NavLink = ({ children, link }) => {
  if (link) {
    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === "Document") {
      return (
        <NextLink href={linkResolver(link)}>
          <a>{children}</a>
        </NextLink>
      );
    }

    // Otherwise return a normal anchor element
    return (
      <div>
        <a href={Link.url(link)} target={link.target}>
          {children}
        </a>
      </div>
    );
  }
  return null;
};

export default NavLink;
