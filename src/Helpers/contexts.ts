import { createContext } from "react";
import { IbookList, IfavoritesList } from "./interfaces.ts";

export const GlobalContext: React.Context<{
  bookList: IbookList[];
  favoritesList: IfavoritesList[];
  accessToken: string;
}> = createContext({
  bookList: [
    {
      book_id: "",
      goodreads_book_id: "",
      best_book_id: "",
      work_id: "",
      books_count: "",
      isbn: "",
      isbn13: "",
      authors: "",
      original_publication_year: "",
      original_title: "",
      title: "",
      language_code: "",
      average_rating: "",
      ratings_count: "",
      work_ratings_count: "",
      work_text_reviews_count: "",
      ratings_1: "",
      ratings_2: "",
      ratings_3: "",
      ratings_4: "",
      ratings_5: "",
      image_url: "",
      small_image_url: "",
    },
  ],
  favoritesList: [
    {
      book_id: "",
      goodreads_book_id: "",
      best_book_id: "",
      work_id: "",
      books_count: "",
      isbn: "",
      isbn13: "",
      authors: "",
      original_publication_year: "",
      original_title: "",
      title: "",
      language_code: "",
      average_rating: "",
      ratings_count: "",
      work_ratings_count: "",
      work_text_reviews_count: "",
      ratings_1: "",
      ratings_2: "",
      ratings_3: "",
      ratings_4: "",
      ratings_5: "",
      image_url: "",
      small_image_url: "",
    },
  ],
  accessToken: "",
});
