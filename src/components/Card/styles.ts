import styled from "styled-components";

interface IProps {
  detailsButton?: boolean;
}

export const Container = styled.div<IProps>`
  border-radius: 1rem;
  text-align: center;
  width: 400px;
  height: 100%;
  padding: 2em 1rem;
  display: flex;
  flex-direction: column;
  justify-content: ${({ detailsButton }) =>
    detailsButton ? "space-between" : "center"};
  box-shadow: 1px 1px 20px #0e0d12;
  align-items: center;
  gap: 2rem;
  margin: ${({ detailsButton }) =>
    detailsButton ? "0" : "2rem auto"};

  span {
    font-weight: 700;
  }

  img {
    width: 250px;
    height: 350px;
  }

  a {
    width: 120px;
    height: 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5280e2;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
