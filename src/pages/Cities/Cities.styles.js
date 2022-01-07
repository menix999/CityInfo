import styled, { keyframes } from "styled-components";
import { SearchInput } from "../../components/inputs/SearchInput.styles";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.backgroundMain};
        color: ${({ theme }) => theme.colors.whiteText};
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
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  padding: 32px 0 0 0;
  height: 36px;
`;

export const ModifiedSearchInput = styled(SearchInput)`
  background-color: ${({ theme }) => theme.colors.secondBackgroundButton};
`;

export const TilesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.mediaQueries.laptop}) {
    height: 100%;
    width: 800px;
  }
`;

export const CitiesTilesCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  margin-top: 24px;
  animation: ${load} 1s;
`;

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .paginationContainer {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .paginationContainer a {
    padding: 8px;
    margin: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    cursor: pointer;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secondBackgroundButton};
  }

  .paginationActive a {
    background-color: ${({ theme }) => theme.colors.backgroundButton};
  }

  .paginationContainer a:hover {
    background-color: ${({ theme }) => theme.colors.backgroundButton};
    transition: 0.3s;
  }
`;
