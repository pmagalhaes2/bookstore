import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
    background: -webkit-linear-gradient(#15cdcb, #5280e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
