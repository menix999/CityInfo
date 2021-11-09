import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";
import { SearchInput } from "../../components/inputs/SearchInput.styles";
import { NavLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.backgroundMain};
        color: ${colors.whiteText}
    }
`;

export const load = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100%;
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  background-color: ${colors.backgroundMain};
  margin-top: 32px;
`;

export const ModifiedSearchInput = styled(SearchInput)`
  background-color: ${colors.secondBackgroundButton};
`;

export const CitiesTilesCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 45vw;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  animation: ${load} 1s;
`;

export const SingleTileCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${colors.backgroundSquareView};
  border-radius: 8px;
  margin: 32px;
  text-align: center;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

export const ImagePhotoToCard = styled.img`
  width: 200px;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const PaginateContainer = styled.div`
  .paginationContainer {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .paginationContainer a {
    padding: 8px;
    margin: 8px;
    border: 1px solid ${colors.borderColor};
    cursor: pointer;
    border-radius: 8px;
    background-color: ${colors.secondBackgroundButton};
  }

  .paginationActive a {
    background-color: ${colors.backgroundButton};
  }

  .paginationContainer a:hover {
    background-color: ${colors.backgroundButton};
    transition: 0.3s;
  }
`;

export const LinkToTiles = styled(NavLink)`
  text-decoration: none;
  color: ${colors.whiteText};
`;
