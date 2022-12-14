import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "../style/Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request;
    }
    fetchData();
  }, []);


 

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "...." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.436), rgba(0, 0, 0, 0.173)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover ",
        backgroundPosition: "center center ",
      }}
    >

      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.original_name }</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(
            movie?.overview,
            180
          )}
        </h2>
      </div>
      {/* <div className="banner--fadeBottom" /> */}
    </header>
  );
};

export default Banner;
