import { useState, useEffect, useCallback } from "react";
import { IBookInfo, getBooks } from "../../services/BooksAPI";
import { Card } from "../../components/Card";
import { Container } from "./styles";
import { Title } from "../../components/Title";

export const Books = () => {
  const [books, setBooks] = useState<IBookInfo[]>([]);

  const fetchData = useCallback(() => {
    getBooks().then((response: IBookInfo[]) => setBooks(response));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Title text={"Books"} />
      <div className="card-container">
        {books.map((book, index) => (
          <Card
            info={{
              id: book.id,
              author: book.author,
              country: book.country,
              imageLink: book.imageLink,
              language: book.language,
              link: book.link,
              title: book.title,
              year: book.year,
              detailsButton: true,
            }}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};
