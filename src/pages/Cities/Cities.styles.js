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
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

  /* animation: ${({ changee }) => {
    if (changee === true) {
      return load;
    }
    return changee;
  }}; */
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
  background-color: ${colors.secondBackgroundButton};
  margin-top: 32px;
`;

export const PaginateContainer = styled.div`
  margin-top: 130px;

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
    color: ${colors.whiteText};
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
