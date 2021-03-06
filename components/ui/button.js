import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";
import { default as NextLink } from "next/link";
import { Link } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
//import { device } from "../../utils/breakpoints";

const Btn = styled.a`
  display: inline-block;
  font-weight: 700;
  cursor: pointer;
`;

const PrimaryButton = styled(Btn)`
  padding: 12px 24px;
  border-radius: 24px;
  position: relative;
  z-index: 0;
  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2px;
    border-radius: 24px;
    background: linear-gradient(to right, #ffaca7 4.08%, #6bded0 96.43%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const SecondaryButton = styled(Btn)`
  display: flex;
  align-items: center;
  text-decoration: underline;
`;

const Button = ({ children, link, primary, secondary, className }) => {
  const isPrimaryBtn = primary ? true : false;

  if (link) {
    if (link.link_type && link.link_type === "Document") {
      return (
        <NextLink href={linkResolver(link)}>
          {isPrimaryBtn ? (
            <PrimaryButton className={className}>{children}</PrimaryButton>
          ) : (
            <SecondaryButton className={className}>{children}</SecondaryButton>
          )}
        </NextLink>
      );
    }

    // Otherwise return a normal anchor element
    return (
      <>
        {primary && (
          <PrimaryButton
            href={Link.url(link)}
            target={link.target}
            className={className}
          >
            {children}
          </PrimaryButton>
        )}
        {secondary && (
          <SecondaryButton
            href={Link.url(link)}
            target={link.target}
            className={className}
          >
            <MdChevronRight />
            {children}
          </SecondaryButton>
        )}
      </>
    );
  }

  return null;
};
export default Button;
