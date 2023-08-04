import BookModel from "@/models/bookModel";
import responseModel from "@/models/responseModel";
import axios from "axios";
import { Bokor } from "next/font/google";

export async function getBooks() {
    const url = `https://frontassignment.hyperhire.in/?page=1`;
    const res = await axios.get<responseModel>(url);
    const data = res.data;
    return data;
}
export async function getBook(bookId: number){
    const book = (await getBooks());
    return book.data[0]
}