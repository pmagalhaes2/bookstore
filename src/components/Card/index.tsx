import { Link, useNavigate } from "react-router-dom";
import { ButtonContainer, Container, TextContainer } from "./styles";
import { deleteBook } from "../../services/BooksAPI";

interface IProps {
  info: {
    id: string;
    author: string;
    country: string;
    imageLink: string;
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
    year,
    imageLink,
    title,
    detailsButton,
  } = info;

  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    try {
      const option = confirm(
        "The operation is irreversible. Are you sure you want to remove the selected item?"
      );

      if (option) {
        deleteBook(id);
        alert(`Book deleted successfully!`);
        navigate("/");
      } else return;
    } catch (err) {
      console.log(err);
    }
  };
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
              <span>Year: </span>
              {year}
            </p>
          </>
        )}
      </TextContainer>

      {detailsButton ? (
        <ButtonContainer>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <Link to={`/books/${id}`}>Details</Link>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Link to={`/books`}>Return</Link>
        </ButtonContainer>
      )}
    </Container>
  );
};
