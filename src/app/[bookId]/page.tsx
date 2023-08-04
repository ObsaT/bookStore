import BookModel from "@/models/bookModel";
import { getBook, getBooks } from "../lib/book";
import responseModel from "@/models/responseModel";
import BookDetail from "@/components/bookDetail";

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
export async function generateStaticParams() {
  const bookData: Promise<responseModel> = getBooks();
  const book =  (await bookData);
  return book.data.map((book) => {
    {bookId: book.title}
  });
}