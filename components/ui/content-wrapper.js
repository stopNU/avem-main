import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  padding: 0 30px;
`;

const ContentWrapper = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
export default ContentWrapper;
