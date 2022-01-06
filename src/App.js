import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [search, setSearch] = useState("Elon Musk");
  const [type, setType] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: search, lang: "en" },
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "28e6111661mshd7c5034e3fb20d2p17e77fjsn4cb05d352ad9",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setType(response.data);
      })
      .catch(function (error) {
        console.error("that's" + error);
      });
  }, [search]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="site-search"
          name="q"
          aria-label="Search through site content"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch(e.target.value);
            }
          }}
        />

        <button>Search</button>
        <div className="container">
          {type.articles !== undefined ? (
            type.articles.map((e) => {
              return (
                <div key={e.id + e.link} className="boxes">
                  <h1>{e.title}</h1>
                  <img style={{ maxWidth: "100%" }} src={e.media} alt="media" />
                  <p>{e.summary}</p>
                </div>
              );
            })
          ) : (
            <h1>Sorry we didn't find anything 😥, try again </h1>
          )}
        </div>
      </form>
    </div>
  );
};

export default App;
