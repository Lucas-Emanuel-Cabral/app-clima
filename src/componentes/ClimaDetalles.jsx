import React, { useEffect, useState } from "react";

function ClimaDetalles(
  {temp, 
  humidity, 
  pressure, 
  tipoClima, 
  name, 
  speed, 
  country, 
  sunset
}) {
  const [estadoClima, setEstadoClima] = useState("");
  useEffect(()=>{

    if(tipoClima){
      switch (tipoClima){
        case "Clouds":
          setEstadoClima("wi-day-cloudy");
          break;
        case "Haze":
          setEstadoClima("wi-fog");
          break;
        case "Clear":
          setEstadoClima("wi-day-sunny");
          break;
        case "Mist":
          setEstadoClima("wi-dust");
          break;
        case "Rain":
          setEstadoClima("wi-day-rain");
          break;
        default:
          setEstadoClima("wi-day-sunny");
          break;
      }
    }

  },[tipoClima]) //eslint-disable-line react-hooks/exhaustive-deps

  let sec = sunset;
  let data = new Date(sec * 1000);
  let timeStr = `${data.getHours()}:${data.getMinutes()}`

  return (
    <>
      <article className="widget">
        <div className="climaIcono">
          <i className={`wi ${estadoClima}`}></i>
        </div>
        <div className="climaInfo">
          <div className="temperatura">
            <span>{temp}&deg;</span>
          </div>
          <div className="descripcion">
            <div className="climaCondicion">{tipoClima}</div>
            <div className="lugar">{name}, {country}</div>
          </div>
        </div>
        <div className="data">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Atardecer
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}%
                <br />
                Humedad
              </p>
            </div>
          </div>
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Presion
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Velocidad
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ClimaDetalles;
