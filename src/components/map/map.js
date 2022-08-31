import ClimateNews from "../news/news";
import "./map.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../api";
import { useState, useEffect } from "react";
import axios from "axios";

const Map = ({ data }) => {
  // const [mapData, setMapData] = useState(null);
  // const handleClick = (cityData) => {
  //   const mapDataFetch = fetch(
  //     `${WEATHER_API_URL}/group?id=4887398,3369157,2643743,5392171,2253354,3469058,611717,186301&appid=${WEATHER_API_KEY}&units=metric`
  //   );

  //   Promise.all([mapDataFetch])
  //     .then(async (response) => {
  //       const mapDataResponse = await response[0].json();

  //       setMapData({ city: cityData.label, ...mapDataResponse });
  //       // console.log(mapDataResponse.list[0]);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // console.log(mapData);
  const [mapData, setMapData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${WEATHER_API_URL}/group?id=4887398,3369157,2643743,5392171,2253354,3469058,611717,186301&appid=${WEATHER_API_KEY}&units=metric`
        );
        console.log("response", response);
        setMapData(response.data.list);
        console.log(response.data.list);
      } catch (err) {
        setMapData(null);
      } finally {
      }
    };
    getData();
  }, []);
  console.log(mapData);
  return (
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
            {mapData.map((data) => (
              <div className="default-cities">
                <button className="default-city" id={"id-" + data.id}>
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
  );
};

export default Map;
