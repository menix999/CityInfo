import styled from "styled-components";
import { load } from "../Cities/Cities.styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const MainTileInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vh;
  height: 90vh;
  animation: ${load} 1s;
  background-color: rgba(51, 51, 51, 0.4);
  border-radius: 0 32px 32px 32px;
`;

export const MainTileUp = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 40vh;
`;

export const MainTileDown = styled(MainTileUp)`
  height: 50vh;
  justify-content: center;
  position: relative;
`;

export const CityPhoto = styled.img`
  width: 25vh;
  height: 25vh;
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  flex-grow: 1;
  position: relative;
`;

export const ContentSectionText = styled(ContentSection)`
  flex-direction: column;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px ${({ theme }) => theme.colors.backgroundMain};
  @media (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const ArrowImage = styled.img`
  width: 70px;
  height: 40px;
  margin: 16px 16px 0 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.2s;
  @media (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    width: 60px;
    height: 30px;
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
  @media (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobileS}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
