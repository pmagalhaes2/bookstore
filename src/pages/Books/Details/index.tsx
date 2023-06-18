import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookInfo, getBookById } from "../../../services/BooksAPI";
import { Card } from "../../../components/Card";
import { Container } from "./styles";
import { Title } from "../../../components/Title";

export const Details = () => {
  const { id } = useParams();

  const [bookInfo, setBookInfo] = useState<IBookInfo>({} as IBookInfo);

  useEffect(() => {
    getBookById(id as string).then((response: IBookInfo) =>
      setBookInfo(response)
    );
  }, [id]);

  return (
    <Container>
      <Title text={"Details"} />
      <Card
        info={{
          id: bookInfo.id,
          author: bookInfo.author,
          country: bookInfo.country,
          imageLink: bookInfo.imageLink,
          link: bookInfo.link,
          title: bookInfo.title,
          year: bookInfo.year,
        }}
      />
    </Container>
  );
};
