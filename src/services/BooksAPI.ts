import axios from "axios";

export interface IBookInfo {
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
