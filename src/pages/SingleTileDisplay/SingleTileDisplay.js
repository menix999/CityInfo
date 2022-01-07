import React, { useState } from "react";
import * as Styled from "./SingleTileDisplay.styles";
import { useEffect } from "react";
import { fetchSingleData, cityDetailInformation } from "../../features/singleTileDisplaySlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { images } from "../../app/citiesPhotos/citiesPhotos";
import { weatherData, weatherDetailApi } from "../../features/weatherSlice";
import { useHistory } from "react-router-dom";
import arrow from "../../assets/images/ArrowGoBack.png";
import Weather from "../../components/Weather/Weather";

const SingleTileDisplay = () => {
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailIdInformation = useSelector(cityDetailInformation);
  const { weather } = useSelector(weatherDetailApi);
  const history = useHistory();
  const icon = `http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`;

  const goBack = () => {
    history.push("/");
    setLoader(false);
  };

  useEffect(() => {
    dispatch(fetchSingleData(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (detailIdInformation.Name && detailIdInformation) {
      dispatch(weatherData(detailIdInformation.Name));
      setLoader(true);
    }
  }, [detailIdInformation, dispatch]);

  return (
    <Styled.Container>
      {loader ? (
        <Styled.MainTileInformation>
          <Styled.MainTileUp>
            <Styled.ContentSection>
              <Styled.CityPhoto src={images[id]} />
              <Styled.ContentSectionText>
                <Styled.Title>{detailIdInformation.Name}</Styled.Title>
                <Styled.ArrowImage src={arrow} onClick={goBack} />
                <Styled.CountryTitle>{detailIdInformation.Country}</Styled.CountryTitle>
              </Styled.ContentSectionText>
            </Styled.ContentSection>
            <Styled.Description>{detailIdInformation.Description}</Styled.Description>
          </Styled.MainTileUp>

          <Styled.MainTileDown>
            <Weather
              icon={icon}
              temp={weather?.main.temp}
              description={weather?.weather[0].description}
              humidity={weather?.main.humidity}
              windSpeed={weather?.wind.speed}
            />
          </Styled.MainTileDown>
        </Styled.MainTileInformation>
      ) : (
        "Loading..."
      )}
    </Styled.Container>
  );
};

export default SingleTileDisplay;
