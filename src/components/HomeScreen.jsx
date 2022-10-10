import React from "react";
import "../style/HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../requests";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Film Netflix 🎥"
        fetchURL={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Film les mieux notés 🌟" fetchURL={requests.fetchTrending} />
      <Row title="Film action 🔫" fetchURL={requests.fetchActionMovie} />
      <Row title="Film comédie 😆" fetchURL={requests.fetchComedieMovie} />
      <Row title="Film criminel 💕" fetchURL={requests.fetchRomanceMovie} />
      <Row
        title="Film documentaire 📚"
        fetchURL={requests.fetchDocumentarieMovie}
      />
      <Row title="Film de guerre 😱" fetchURL={requests.fetchWarMovie} />
    </div>
  );
};

export default HomeScreen;
