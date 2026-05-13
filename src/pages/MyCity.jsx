import React, { useState, useEffect } from 'react';
import './MyCity.css';

const API_KEY = 'd6760cd7ba3b633d7ee2d31c7a7d16a4';
const LAT = 48.0206;
const LON = 37.8516;

function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
    )
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((d) => {
        setWeather(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <h1>Моє місто</h1>
      <p className="subtitle">Торецьк, Донецька область, Україна</p>

      <div className="city-desc">
        <strong>Торецьк</strong> — невелике місто на сході України, розташоване в Донецькій
        області. Місто відоме своєю шахтарською історією та працьовитими
        людьми. Торецьк поєднує промислове минуле з сучасним життям місцевих жителів і має
        важливе значення для регіону.
      </div>

      <h2>Погода зараз</h2>

      {loading && (
        <div className="loading">
          <div className="dot-spin"></div>
          Завантаження...
        </div>
      )}

      {error && (
        <div className="err">Не вдалося завантажити погоду. Перевірте з'єднання.</div>
      )}

      {weather && (
        <div className="weather-box">
          <div className="weather-top">
            <div>
              <div className="weather-name">Торецьк, UA</div>
              <div className="weather-sub">Оновлено щойно</div>
            </div>
            <div className="weather-big">
              <div className="weather-icon"></div> {/* Емодзі більше не використовується */}
              <div>
                <div className="weather-temp">{Math.round(weather.main.temp)}°C</div>
                <div className="weather-desc-text">{weather.weather[0].description}</div>
              </div>
            </div>
          </div>
          <div className="weather-grid">
            <div className="w-item">
              <div className="w-label">Відчувається</div>
              <div className="w-val">{Math.round(weather.main.feels_like)}°C</div>
            </div>
            <div className="w-item">
              <div className="w-label">Вологість</div>
              <div className="w-val">{weather.main.humidity}%</div>
            </div>
            <div className="w-item">
              <div className="w-label">Вітер</div>
              <div className="w-val">{Math.round(weather.wind.speed)} м/с</div>
            </div>
            <div className="w-item">
              <div className="w-label">Хмарність</div>
              <div className="w-val">{weather.clouds.all}%</div>
            </div>
          </div>
        </div>
      )}

      <div className="coords">
        <div><span>Широта</span><strong>{LAT}° N</strong></div>
        <div><span>Довгота</span><strong>{LON}° E</strong></div>
        <div><span>Країна</span><strong>Україна 🇺🇦</strong></div>
      </div>
    </div>
  );
}

export default MyCity;