import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { IBookInfo, getBooks } from "./services/BooksAPI";

function App() {
  const [books, setBooks] = useState<IBookInfo[]>([]);

  const fetchData = useCallback(() => {
    getBooks().then((response: IBookInfo[]) => setBooks(response));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h1>BookStore</h1>
      {books.map((book, index) => (
        <h2 key={index}>{book.title}</h2>
      ))}
    </>
  );
}

export default App;
