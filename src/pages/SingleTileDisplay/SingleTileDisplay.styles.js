import styled from "styled-components";
import { load } from "../Cities/Cities.styles";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.backgroundMain};
        color: ${({ theme }) => theme.colors.whiteText};
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainTileInformation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  animation: ${load} 1s;
  background-color: rgba(51, 51, 51, 0.4);
  border-radius: 0 32px 32px 32px;
  height: 100vh;
  overflow-y: auto;
  align-items: center;
  position: relative;
  @media (min-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    height: 90vh;
    width: 90vw;
    overflow-y: auto;
    overflow-x: hidden;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.laptop}) {
    align-items: flex-end;
    width: 1000px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 350px;
  @media (min-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    width: 70vw;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.laptop}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 300px;
  }
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const CityPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentSectionText = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.mediaQueries.laptop}) {
    width: 60%;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px ${({ theme }) => theme.colors.backgroundMain};
`;

export const ArrowImage = styled.img`
  width: 50px;
  height: 30px;
  margin: 16px 16px 0 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.2s;
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobileS}) {
    width: 40px;
    height: 20px;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

export const CountryTitle = styled(Title)``;

export const Description = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-shadow: 1px 1px #000;
`;
