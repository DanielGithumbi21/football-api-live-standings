import React from "react";

const Seasons = ({ season, classname }) => {
  return (
    <div className="container m-3 ">
      <select className="form-select" aria-label="Default select example">
        <option selected>select a season</option>
        {season.map((season) => (
          <option value="1">{season.year}</option>
        ))}
      </select>
    </div>
  );
};

export default Seasons;
