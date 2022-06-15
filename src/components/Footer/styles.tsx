import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  margin-top: 1rem;
  padding: 0.5rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(215, 166, 0, 1) 66%
  );
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9;

  @media (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;
