import { useSearchParams } from "react-router-dom";
import { IBookInfo, searchBooks } from "../../services/BooksAPI";
import { useCallback, useEffect, useState } from "react";

export const Search = () => {
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState<IBookInfo[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await searchBooks(searchParams);
      setData(response);
    } catch (error) {
      setError("Houve algum erro para carregar os dados!");
    }
    setLoading(false);
  }, [searchParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {error && <p>Ocorreu um erro!</p>}
      {data.length === 0 && <p>Nenhum encontrado</p>}
      {loading && <p>Carregando dados..</p>}
      {data && data.map((d, index) => <p key={index}>{d.title}</p>)}
    </>
  );
};
