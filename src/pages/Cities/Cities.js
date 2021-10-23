import React, { useState } from "react";
import { fetchData } from "../../features/citySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as Styled from "./Cities.styles";

const Cities = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const cityInformations = useSelector((state) => state.cities.cityInformation);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const cityInformationTiles = cityInformations
    .filter((city) => {
      if (searchValue === "") {
        return city;
      } else if (
        city.Name.toLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return city;
      }
    })
    .map((city) => {
      return (
        <>
          <Styled.SingleTileCard key={city.id}>
            <Styled.ImagePhotoToCard></Styled.ImagePhotoToCard>
            {city.Name}
          </Styled.SingleTileCard>
        </>
      );
    });

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.SearchButtonContainer>
        <Styled.ModifiedSearchInput
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        ></Styled.ModifiedSearchInput>
      </Styled.SearchButtonContainer>

      <Styled.CitiesTilesCardContainer>
        {cityInformationTiles.slice(0, 9)}
      </Styled.CitiesTilesCardContainer>
    </>
  );
};

export default Cities;
