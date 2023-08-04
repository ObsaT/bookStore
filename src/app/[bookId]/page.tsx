import BookModel from "@/models/bookModel";
import { getBook, getBooks } from "../lib/book";
import responseModel from "@/models/responseModel";
import BookDetail from "@/components/bookDetail";
import { useRouter } from "next/router";

type Params = {
  params: {
    bookId: number;
  }
}
export async function generateMetaData({params: {bookId}}: Params) {
  const bookData: Promise<BookModel> = getBook(bookId);
  const book =  (await bookData);
  return {
    title: book.title,
    descriptio: book.description
  }
}
const  page  = async ({params: {bookId}}: Params )  => {
  const bookData: Promise<BookModel> = getBook(bookId);
  const book =  (await bookData);
  return (
   <>
    <BookDetail book={book}/>
   </>
  )
}
export default page;
 