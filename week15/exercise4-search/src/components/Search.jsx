import { books } from "../data/bookData.js";
import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  // Only filter if query is not empty
  const filtered =
    query.trim() === ""
      ? [] // show nothing if no search
      : books.filter((b) =>
          b.title.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <div>
      <input
        className="input-box"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
      />

      {/* Only show results count if searching */}
      {query && <p>{filtered.length} results</p>}

      {/* Only show results if searching */}
      {filtered.map((b) => (
        <div key={b.id}>{b.title}</div>
      ))}
    </div>
  );
}

export default Search;
