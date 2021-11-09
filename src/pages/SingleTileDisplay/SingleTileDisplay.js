import React from "react";
import * as Styled from "./SingleTileDisplay.styles";
import { useEffect } from "react";
import {
  fetchSingleData,
  cityDetailInformation,
} from "../../features/singleTileDisplaySlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { images } from "../../app/citiesPhotos/citiesPhotos";
import { weatherData, weatherDetailApi } from "../../features/weatherSlice";

const SingleTileDisplay = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailIdInformation = useSelector(cityDetailInformation);
  const weatherDetailInformation = useSelector(weatherDetailApi);

  useEffect(() => {
    dispatch(fetchSingleData(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (!detailIdInformation.Name) return;
    dispatch(weatherData(detailIdInformation.Name));
  }, [detailIdInformation, dispatch]);

  const weather = weatherDetailInformation.weather;
  const icon = `http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`;

  console.log(weather);
  return (
    <Styled.Container>
      <Styled.MainTileInformation>
        <Styled.MainTileUp>
          <Styled.ContentSection>
            <Styled.CityPhoto src={images[id]} />
            <Styled.ContentSectionText>
              <Styled.Title>{detailIdInformation.Name}</Styled.Title>
              <Styled.CountryTitle>
                {detailIdInformation.Country}
              </Styled.CountryTitle>
            </Styled.ContentSectionText>
          </Styled.ContentSection>
          <Styled.Description>
            {detailIdInformation.Description}
          </Styled.Description>
        </Styled.MainTileUp>

        <Styled.MainTileDown>
          <Styled.WeatherContainer>
            <Styled.IconSpace>
              <Styled.Icon src={icon} />
            </Styled.IconSpace>
            <Styled.Temperature>
              {`${Math.round(weather?.main.temp - 273)}°C`}
            </Styled.Temperature>
            <Styled.WeatherInformation>
              {`Weather: ${weather?.weather[0].description}`}
            </Styled.WeatherInformation>
            <Styled.WeatherInformation>{`Humidity: ${weather?.main.humidity} %`}</Styled.WeatherInformation>
            <Styled.WeatherInformation>
              {`Wind speed: ${Math.ceil(weather?.wind.speed)} km/h`}
            </Styled.WeatherInformation>
            <Styled.Xd />
          </Styled.WeatherContainer>
        </Styled.MainTileDown>
      </Styled.MainTileInformation>
    </Styled.Container>
  );
};

export default SingleTileDisplay;
