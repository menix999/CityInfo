import React from "react";
import * as Styled from "./SingleTileDisplay.styles";
import { useEffect } from "react";
import {
  fetchSingleData,
  cityDetailInformation,
} from "../../features/singleTileDisplaySlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { images } from "../../app/citiesPhotos/citiesPhotos";

const SingleTileDisplay = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailIdInformation = useSelector(cityDetailInformation);

  useEffect(() => {
    dispatch(fetchSingleData(id));
  }, [dispatch, id]);

  console.log(detailIdInformation);

  return (
    <Styled.Container>
      <Styled.MainTileInformation>
        <Styled.MainTileUp>
          <Styled.ContentSection>
            <Styled.CityPhoto src={images[id]} />
            <Styled.ContentSection22>
              <Styled.Title>{detailIdInformation.Name}</Styled.Title>
              <Styled.CountryTitle>
                {detailIdInformation.Country}
              </Styled.CountryTitle>
            </Styled.ContentSection22>
          </Styled.ContentSection>
        </Styled.MainTileUp>

        <Styled.MainTileDown></Styled.MainTileDown>
      </Styled.MainTileInformation>
    </Styled.Container>
  );
};

export default SingleTileDisplay;
