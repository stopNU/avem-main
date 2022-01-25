import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  padding: 0 24px;
  @media ${device.mobile} {
  padding: 0 30px;
  }
`;

const ContentWrapper = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
export default ContentWrapper;
