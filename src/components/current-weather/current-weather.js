import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div
      className="weather"
      style={{
        backgroundImage: `url(${`icons/${data.weather[0].icon}.png`})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="top">
        <div>
          <p className="city">
            {data.name}, {data.sys.country}
          </p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="bottom">
        <p className="temprature">{Math.ceil(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">
              {Math.ceil(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
