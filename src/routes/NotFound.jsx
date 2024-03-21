import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100vh;

  .number {
    font-size: var(--text-md);
    font-weight: 600;

    &::after {
      content: '|';
      display: inline-block;
      font-weight: 400;
      margin-left: 16px;
    }
  }
`;

function NotFound() {
  return (
    <Wrapper>
      <strong className="number">404</strong>
      <strong>This page could not be found</strong>
    </Wrapper>
  )
}

export default NotFound;