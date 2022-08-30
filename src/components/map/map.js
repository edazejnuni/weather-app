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
            <div className="default-cities">
              <a href="#!">
                <span>Chicago</span>
                <div className="weather-icon">
                  {/* <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${
                        data.response.weather[0].icon + "-icon"
                      }.png`}
                    /> */}
                </div>
              </a>
              <a href="#!">
                <span>London</span>
                <div className="weather-icon"></div>
              </a>
              <a href="#!">
                <span>Tbilisi</span>
                <div className="weather-icon"></div>
              </a>
              <a href="#!">
                <span>Mombasa</span>
                <div className="weather-icon"></div>
              </a>
              <a href="#!">
                <span>Dakar</span>
                <div className="weather-icon"></div>
              </a>
              <a href="#!">
                <span>Cape Town</span>
                <div className="weather-icon"></div>
              </a>
              <a href="#!">
                <span>San Jose</span>
                <div className="weather-icon"></div>
              </a>
              <a href="#!">
                <span>Brasilia</span>
                <div className="weather-icon"></div>
              </a>
            </div>
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
