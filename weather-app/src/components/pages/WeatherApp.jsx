import { useEffect } from "react";
import { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed967a9f9489aeb47de459dc1dc305b2&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          setError("Please enter a valid city name");
          setWeather(null);
        } else {
          setWeather(data);
          setError("");
        }
      })
      .catch(() => setError("Error fetching data"));
  };

  return (
    <div className="container text-center my-4">
      <h1>Weather App </h1>
      <div className="d-flex justify-content-center my-3">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Search
        </button>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {weather && (
        <div className="card mx-auto" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              {weather.name}, {weather.sys.country}
            </h5>
            <p className="card-text">Temperature:: {weather.main.temp}°C</p>
            <p className="card-text">Humidity: {weather.main.humidity}%</p>
            <p className="card-text">
              Weather: {weather.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
