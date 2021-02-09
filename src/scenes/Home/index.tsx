import React from "react";
import FlipImage from "../../components/FlipImage";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">
        <h1>Search your favorite books</h1>
      </div>
      <div className="home-item">
        <FlipImage image="./logo192.png" header="Project" content="Books" />
        <div className="home-description-top">
          This App gonna give you access to a lot of information through some
          great books.
        </div>
      </div>
      <div className="home-item-reverse">
        <div className="home-description-button">
          If you want some books you can access them with this app and read the
          description about them.
        </div>
        <FlipImage image="./logo192.png" header="Project" content="Books" />
      </div>
    </div>
  );
};

export default Home;
