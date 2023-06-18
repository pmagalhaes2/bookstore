import axios from "axios";

export interface IBookInfo {
  id: string;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}

const baseURL = "http://localhost:3000/books";

export const api = axios.create({
  baseURL: baseURL,
});

export const getBooks = (): Promise<IBookInfo[]> =>
  api.get(baseURL).then((response) => response.data);

export const searchBooks = (searchParams: URLSearchParams) =>
  api.get(`${baseURL}?${searchParams}`).then((response) => response.data);

export const getBookById = (id: string) =>
  api.get(`${baseURL}/${id}`).then((response) => response.data);

export const deleteBook = (id: string) => 
  api.delete(`${baseURL}/${id}`).then((response) => response.data)
