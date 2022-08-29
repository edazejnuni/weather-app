import ClimateNews from "../news/news";
import "./map.css";

const Map = () => {
  return (
    <div className="weather-map">
      <div className="container">
        <h1 className="title">
          Weather forecasts for thousands
          <br /> of locations around the world
        </h1>
        <div className="d-flex">
          <div className="wordMap-holder">
            <img
              alt="world-map"
              className="world-map"
              src="images/world-map.png"
            />
          </div>
          <div className="slider">
            <ClimateNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
