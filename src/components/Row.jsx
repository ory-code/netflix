import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../style/Row.css";
function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const baseUrl_img = "https://image.tmdb.org/t/p/original";
  console.log("fetch", fetchURL);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (m) =>
            ((isLargeRow && m.poster_path) ||
              (!isLargeRow && m.backdrop_path)) && (
              <img
                src={`${baseUrl_img}${
                  isLargeRow ? m.poster_path : m.backdrop_path
                }`}
                alt={m.name}
                key={m.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"} `}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
