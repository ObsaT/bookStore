import BookModel from "@/models/bookModel";
import { atom } from "recoil";
 const bookListState = atom({
    key: 'bookList',
    default: [] as BookModel[],
});
const userState = atom({
    key: 'bookList',
    default: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
});
export {bookListState, userState}

