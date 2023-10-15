import axios from "axios";
import { getContentType } from "./api.helper";

// создание экземпляра axios и настраиваем
// будет использоваться для каждого запроса instanse.get() вместо axios.get()
const instanse = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType()
})


