import styled from "styled-components";
import device from "../../styles/responsive";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 80px;
  padding: 16px 0;
  border-top: 1px solid var(--color-white);
`;

export const Copyright = styled.div`
  color: var(--color-white);
  font-size: 16px;
  strong {
    font-size: 1.2em;
    font-weight: 600;
  }

  @media ${device.mobile} {
    font-size: 15px;
  }
`;
export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: var(--layout-width);
  margin: 0 auto;
`;