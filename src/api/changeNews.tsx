import { useEffect, useState } from "react";
import axios from "axios";

export const ChangeNews = (news: string) => {
  const [data, setData] = useState(Object);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (news) {
      setLoading(true);
      const options: object = {
        method: "GET",
        url: "https://free-news.p.rapidapi.com/v1/search",
        params: { q: news, lang: "en" },
        headers: {
          "x-rapidapi-host": "free-news.p.rapidapi.com",
          "x-rapidapi-key":
            "28e6111661mshd7c5034e3fb20d2p17e77fjsn4cb05d352ad9",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          setError(error);
        });
    }
  }, [news]);

  return { data, loading, error };
};
