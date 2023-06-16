import { Link } from "react-router-dom";
import { Container, TextContainer } from "./styles";

interface IProps {
  info: {
    id: string;
    author: string;
    country: string;
    imageLink: string;
    language: string;
    link: string;
    title: string;
    year: number;
    detailsButton?: boolean;
  };
}

export const Card = ({ info }: IProps) => {
  const {
    id,
    author,
    country,
    language,
    year,
    imageLink,
    title,
    detailsButton,
  } = info;
  return (
    <Container detailsButton={detailsButton}>
      <h2>{title}</h2>
      <img src={imageLink} alt="" />
      <TextContainer>
        <p>
          <span>Author: </span>
          {author}
        </p>
        {!detailsButton && (
          <>
            <p>
              <span>Country: </span>
              {country}
            </p>
            <p>
              <span>Language: </span>
              {language}
            </p>
            <p>
              <span>Year: </span>
              {year}
            </p>
          </>
        )}
      </TextContainer>

      {detailsButton ? (
        <Link to={`/books/${id}`}>Details</Link>
      ) : (
        <Link to={`/books`}>Voltar</Link>
      )}
    </Container>
  );
};
