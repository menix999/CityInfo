import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { colors } from "../../styles/colors";
import { SearchInput } from "../../components/inputs/SearchInput.styles";
export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.backgroundMain};
    }
`;

const load = keyframes`
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
`;

export const SearchButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.backgroundMain};
  text-align: center;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 24px;
`;

export const CitiesTilesCardContainer = styled.div`
  width: 100vh;
  height: 70vh;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${load} 1s;
`;

export const SingleTileCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${colors.backgroundSquareView};
  border-radius: 8px;
  margin: 32px;
  color: ${colors.whiteText};
  text-align: center;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

export const ImagePhotoToCard = styled.div`
  width: 200px;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-image: url("http://placeimg.com/640/480/city");
`;

export const ModifiedSearchInput = styled(SearchInput)`
  background-color: ${colors.backgroundButton};
  margin-top: 32px;
`;
