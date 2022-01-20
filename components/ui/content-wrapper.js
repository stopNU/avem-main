import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  padding: 0 30px;
`;

const ContentWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
export default ContentWrapper;
