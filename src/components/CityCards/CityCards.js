import React from "react";
import * as Styled from "./CityCards.styles";
import { images } from "../../app/citiesPhotos/citiesPhotos";

const CityCards = ({ id, Name }) => {
  return (
    <Styled.SingleTileCard>
      <Styled.LinkToTiles to={`${id}`}>
        <Styled.ImagePhotoToCard src={images[id]} />
        {Name}
      </Styled.LinkToTiles>
    </Styled.SingleTileCard>
  );
};

export default CityCards;
