import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  padding: 2rem 9rem;
  display: flex;
  justify-content: space-between;
  background-color: #212226;
  position: sticky;
  top: 0;

  form {
    display: flex;
    gap: 0.5rem;

    input {
      height: 1.5rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      outline: none;
      color: #c4c4c4;

      ::placeholder {
        font-size: 0.9rem;
        font-weight: 400;
      }
    }

    input[type="submit"] {
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.1rem;
      background-color: #2f3034;
      border: 2px solid #5280e2;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    color: #5280e2;
  }

  .active {
    border-bottom: 2px solid #5280e2;
  }
`;
