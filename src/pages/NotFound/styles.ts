import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  padding: 2rem;

  img {
    width: 50%;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
    background: -webkit-linear-gradient(#15cdcb, #5280e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
