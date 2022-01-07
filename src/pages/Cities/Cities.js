import React, { useState } from "react";
import { fetchData, citySingleName } from "../../features/citySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as Styled from "./Cities.styles";
import ReactPaginate from "react-paginate";
import CityCards from "../../components/CityCards/CityCards";

const Cities = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const cityInformations = useSelector(citySingleName);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const tilesDiplayed = 9;
  const pageVisited = pageNumber * tilesDiplayed;

  const cityInformationTiles = cityInformations
    .filter((city) => {
      if (!searchValue) {
        return city;
      } else if (city.Name.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
        return city;
      }
      return null;
    })
    .map(({ id, Name }) => {
      return <CityCards key={id} id={id} Name={Name}></CityCards>;
    });
  const pageCount = Math.ceil(cityInformationTiles.length / tilesDiplayed);

  const changePage = (event) => {
    setPageNumber(event.selected);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
    setPageNumber(0);
  };

  console.log(pageNumber);
  return (
    <Styled.Container>
      <Styled.GlobalStyle />
      <Styled.SearchButtonContainer>
        <form onSubmit={formSubmit}>
          <label>
            <Styled.ModifiedSearchInput
              placeholder="Search..."
              onChange={(e) => setInputValue(e.target.value)}
            ></Styled.ModifiedSearchInput>
          </label>
        </form>
      </Styled.SearchButtonContainer>

      <Styled.TilesContainer>
        <Styled.CitiesTilesCardContainer>
          {cityInformationTiles.slice(pageVisited, pageVisited + tilesDiplayed)}
        </Styled.CitiesTilesCardContainer>
      </Styled.TilesContainer>

      <Styled.PaginateContainer>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationContainer"}
          activeClassName={"paginationActive"}
          forcePage={pageNumber}
        />
      </Styled.PaginateContainer>
    </Styled.Container>
  );
};

export default Cities;
