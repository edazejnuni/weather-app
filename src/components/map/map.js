import ClimateNews from "../news/news";
import "./map.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../api";
import { useState, useEffect, useRef } from "react";
import CurrentWeather from "../current-weather/current-weather";
import Forecast from "../forecast/forecast";
import axios from "axios";

const Map = () => {
  const [mapData, setMapData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${WEATHER_API_URL}/group?id=4887398,3369157,2643743,5392171,2253354,3469058,611717,186301&appid=${WEATHER_API_KEY}&units=metric`
        );
        setMapData(response.data.list);
      } catch (err) {
        setMapData(null);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${WEATHER_API_URL}/group?id=4887398,3369157,2643743,5392171,2253354,3469058,611717,186301&appid=${WEATHER_API_KEY}&units=metric`
        );
        setForecast(response.data.list);
        console.log(response.data.list);
      } catch (err) {
        setForecast(null);
      }
    };
    getData();
  }, []);

  const [showWeatherDetails, setShowWeatherDetails] = useState(false);
  const [index, setIndex] = useState();
  const weatherDetailsClick = (event, key) => {
    setShowWeatherDetails(true);
    setIndex(key);
  };
  return (
    <div>
      {showWeatherDetails ? (
        <div className="container">
          {mapData && <CurrentWeather data={mapData[index]} />}
          {forecast && <Forecast data={forecast[index]} />}
          {console.log(forecast)}
        </div>
      ) : null}
      {showWeatherDetails ? null : (
        <div className="weather-map">
          <div className="container">
            <h1 className="title">
              Weather forecasts for thousands
              <br /> of locations around the world
            </h1>
            <div className="d-flex">
              <div className="worldMap-holder">
                <img
                  alt="world-map"
                  className="world-map"
                  src="images/world-map.png"
                />
                {mapData.map((data, key) => (
                  <div key={data.id} className="default-cities">
                    <button
                      className="default-city"
                      onClick={(event) => weatherDetailsClick(event, key)}
                      key={key}
                      id={"id-" + data.id}
                      ref={ref}
                      data-index={key}
                    >
                      <span>{data.name}</span>
                      <div className="weather-icon">
                        <img
                          alt="icon"
                          className="icon"
                          src={`icons/${data.weather[0].icon + "-icon"}.png`}
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
              <div className="slider">
                <ClimateNews />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
