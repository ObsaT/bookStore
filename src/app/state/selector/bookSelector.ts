import BookModel from "@/models/bookModel";
import responseModel from "@/models/responseModel";
import { data } from "autoprefixer";
import axios from "axios";
import { atom, selector } from "recoil";
const url = `https://frontassignment.hyperhire.in/?page=1`;
const bookListSelector = selector({
  key: "bookListSelector",
  get: async ({ get }) => {
    try {
      const response = await axios.get<responseModel>(url);
      const books  = response.data;
      return books
    } catch (error) {
      throw error;
    }
  }
});
export { bookListSelector };