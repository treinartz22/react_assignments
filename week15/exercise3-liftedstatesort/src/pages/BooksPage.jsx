import BookList from "../components/BookList.jsx";
import { books } from "../data/bookData.js";

function BooksPage() {
  return (
    <div>
      <BookList books={books} />
    </div>
  );
}

export default BooksPage;
