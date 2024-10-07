import React, { useState } from "react";
import { movies } from "./data";

const Movies = () => {
  const [moviesList, setMoviesList] = useState(movies);
  const filterByChange = (cat) => {
    setMoviesList(movies.filter((data) => data.category == cat));
  };
  return (
    <>
      <div className="my-3 " style={{ width: "1000px", margin: "auto" }}>
        <div className="mx-auto text-center">
          <button
            onClick={() => setMoviesList(movies)}
            type="button"
            className="btn btn-outline-primary mx-3"
          >
            All
          </button>
          <button
            onClick={() => filterByChange("Action")}
            type="button"
            className="btn btn-outline-primary mx-3"
          >
            Action
          </button>
          <button
            onClick={() => filterByChange("Thriller")}
            type="button"
            className="btn btn-outline-light mx-3"
          >
            Thriller
          </button>
          <button
            onClick={() => filterByChange("Animation")}
            type="button"
            className="btn btn-outline-info mx-3"
          >
            Animation
          </button>
          <button
            onClick={() => filterByChange("Horror")}
            type="button"
            className="btn btn-outline-warning mx-3"
          >
            Horror
          </button>
          <button
            onClick={() => filterByChange("Drama")}
            type="button"
            className="btn btn-outline-info mx-3"
          >
            Drama
          </button>
          <button
            onClick={() => filterByChange("Sci-Fi")}
            type="button"
            className="btn btn-outline-light mx-3"
          >
            Sci - Fi
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          // gap: "2rem",
          textAlign: "center",
          width: "1200px",
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {moviesList.map((data) => (
          <div key={data.id} style={{ maxWidth: "250px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h3>{data.title}</h3>
            <h3>{data.release_date}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
