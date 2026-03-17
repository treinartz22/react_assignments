import BookList from "../components/BookList";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <BookList limit={3} />
    </div>
  );
}
export default Home;
