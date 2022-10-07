import React from "react";

const Banner = () => {
  return (
    <div className="container banner-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100 banner-image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="container carousel-container">
                <h3>Football Standings</h3>
                <p>Click on any league to view the standings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
