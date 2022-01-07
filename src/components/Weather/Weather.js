import React from "react";
import * as Styled from "./Weather.styles";

const Weather = ({ icon, temp, description, humidity, windSpeed }) => {
  return (
    <>
      <Styled.WeatherPhoto></Styled.WeatherPhoto>
      <Styled.WeatherContainer>
        <Styled.IconSpace>
          <Styled.Icon src={icon} />
        </Styled.IconSpace>
        <Styled.Temperature>{temp ? `${Math.round(temp - 273)}°C` : "0°C"}</Styled.Temperature>
        <Styled.WeatherInformation>{`Weather: ${description}`}</Styled.WeatherInformation>
        <Styled.WeatherInformation>{`Humidity: ${humidity} %`}</Styled.WeatherInformation>
        <Styled.WeatherInformation>{`Wind speed: ${Math.ceil(windSpeed)} km/h`}</Styled.WeatherInformation>
      </Styled.WeatherContainer>
    </>
  );
};

export default Weather;
