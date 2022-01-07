import styled from "styled-components";
import { weather } from "../../app/citiesPhotos/citiesPhotos";

export const WeatherPhoto = styled.div`
  width: 30vh;
  background-image: url(${weather});
  background-repeat: no-repeat;
  border-radius: 32px 32px 32px 32px;
  @media (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    position: absolute;
    width: 50vh;
    height: 150px;
    bottom: 0;
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobileS}) {
    position: absolute;
    width: 55vh;
    height: 150px;
    bottom: 0;
  }
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vh;
  position: absolute;
  @media (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.m};
    flex-direction: row;
    justify-content: center;
    bottom: 40px;
  }
`;

export const IconSpace = styled.div`
  margin-top: 8px;
`;

export const Icon = styled.img`
  height: 70px;
  width: 70px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
    transition: 0.2s;
  }
`;

export const Temperature = styled.h1`
  width: 100%;
  text-align: center;
  text-shadow: 2px 2px ${({ theme }) => theme.colors.backgroundMain};
`;

export const WeatherInformation = styled.h3`
  width: 100%;
  height: 60px;
  margin: 0;
  text-shadow: 2px 2px ${({ theme }) => theme.colors.backgroundMain};
  margin-left: 8px;
`;
