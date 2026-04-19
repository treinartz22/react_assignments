import BookList from "../components/BookList.jsx";
import Search from "../components/Search.jsx";

function Home() {
  return (
    <>
      <BookList limit={3} />
      <Search />
    </>
  );
}
export default Home;
