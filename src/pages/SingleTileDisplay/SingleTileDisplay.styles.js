import styled from "styled-components";
import { colors } from "../../styles/colors";
import { load } from "../Cities/Cities.styles";
import { weather } from "../../app/citiesPhotos/citiesPhotos";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainTileInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vh;
  height: 90vh;
  animation: ${load} 1s;
`;

export const MainTileUp = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 40vh;
  background-color: rgba(51, 51, 51, 0.4);
  border-radius: 32px 32px 0px 0px;
`;

export const MainTileDown = styled(MainTileUp)`
  /* background-color: ${colors.borderColor}; */
  height: 50vh;
  border-radius: 0px 0px 32px 32px;
`;

export const CityPhoto = styled.img`
  display: flex;
  height: 20vh;
  width: 30vh;
`;

export const ContentSection = styled.div`
  display: flex;
  height: 200px;
  flex-grow: 1;
`;

export const ContentSectionText = styled(ContentSection)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  text-shadow: 2px 2px ${colors.backgroundMain};
`;

export const CountryTitle = styled(Title)``;

export const Description = styled.h3`
  display: flex;
  width: 100%;
  margin: 0 40px 40px 40px;
  text-shadow: 1px 1px #000;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 30vh;
  background-image: url(${weather});
  border-radius: 0px 32px 32px 32px;
`;

export const IconSpace = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 8px;
`;

export const Icon = styled.img`
  height: 70px;
  width: 70px;
`;

export const Temperature = styled(Title)``;

export const WeatherInformation = styled.h3`
  width: 100%;
  height: 60px;
  margin: 0px;
  text-shadow: 2px 2px ${colors.backgroundMain};
  margin-left: 8px;
`;

export const Xd = styled.div`
  height: 100%;
`;
