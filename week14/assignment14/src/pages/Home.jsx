import BookList from "../components/BookList.jsx";

function Home() {
  return (
    <div>
      <BookList limit={2} />
    </div>
  );
}
export default Home;
