import styled from "styled-components";
import { colors } from "../../styles/colors";
import { load } from "../Cities/Cities.styles";

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
  background-color: ${colors.backgroundButton};
  animation: ${load} 1s;
  /* border: 1px solid green; */
`;

export const MainTileUp = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 45vh;
  background-color: ${colors.iconColor};
`;

export const MainTileDown = styled(MainTileUp)`
  background-color: ${colors.borderColor};
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

export const ContentSection22 = styled(ContentSection)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
`;

export const CountryTitle = styled(Title)``;
