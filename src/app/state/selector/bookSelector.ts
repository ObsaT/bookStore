import { getBooks } from "@/app/lib/book";
import { selector } from "recoil";
const bookListSelector = selector({
  key: "bookListSelector",
  get: async ({ get }) => {
    try {
      const books  = await getBooks();
      return books
    } catch (error) {
      throw error;
    }
  }
});
export { bookListSelector };