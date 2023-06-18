import { Input } from "../../../components/Input";
import { Title } from "../../../components/Title";
import { ChangeEvent, FormEvent, useState } from "react";
import { inputProps } from "./inputProps";
import { IBookRequest, createBook } from "../../../services/BooksAPI";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const Create = () => {
  const [request, setRequest] = useState({} as IBookRequest);

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      createBook(request)      .then((response) => {
        if (response.status === 201) {
          alert("Book successfully added!");
          navigate("/");
        }
      })
      .catch((err) => {
        const { status } = err.response;
        const { message } = err.response.data;
        alert(`[Error ${status}] - Message: ${message}`);
      });
  };

  return (
    <Container>
      <Title text={"Create Book"} />
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputProps.map((input, index) => (
          <Input
            label={input.label}
            id={input.id}
            name={input.name}
            onChange={handleChange}
            key={index}
          />
        ))}
        <Input type="submit" value="Submit" />
      </form>
    </Container>
  );
};
