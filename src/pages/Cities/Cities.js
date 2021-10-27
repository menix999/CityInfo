import React, { useState } from "react";
import { fetchData } from "../../features/citySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as Styled from "./Cities.styles";
import ReactPaginate from "react-paginate";
import { images } from "../../app/citiesPhotos/citiesPhotos";

const Cities = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [zmiana, setZmiana] = useState(false);

  const dispatch = useDispatch();
  const cityInformations = useSelector((state) => state.cities.cityInformation);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const tilesDiplayed = 9;
  const pageVisited = pageNumber * tilesDiplayed;
  const pageCount = Math.ceil(cityInformations.length / tilesDiplayed);

  const cityInformationTiles = cityInformations
    .filter((city) => {
      if (searchValue === "") {
        return city;
      } else if (
        city.Name.toLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return city;
      }
      return null;
    })
    .map((city, numberImage) => {
      return (
        <>
          <Styled.SingleTileCard key={city.id}>
            <Styled.ImagePhotoToCard src={images[city.id]} />
            {city.Name}
          </Styled.SingleTileCard>
        </>
      );
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setZmiana((prevValue) => !prevValue);
  };

  return (
    <>
      <Styled.GlobalStyle />

      <Styled.Container>
        <Styled.SearchButtonContainer>
          <Styled.ModifiedSearchInput
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
          ></Styled.ModifiedSearchInput>
        </Styled.SearchButtonContainer>

        <Styled.CitiesTilesCardContainer changee={zmiana}>
          {cityInformationTiles.slice(pageVisited, pageVisited + tilesDiplayed)}
        </Styled.CitiesTilesCardContainer>
      </Styled.Container>

      <Styled.PaginateContainer>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationContainer"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </Styled.PaginateContainer>
    </>
  );
};

export default Cities;
