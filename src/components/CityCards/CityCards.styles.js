import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SingleTileCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundSquareView};
  border-radius: 8px;
  margin: 32px;
  text-align: center;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
  @media (max-height: ${({ theme }) => theme.mediaQueries.tablet}) {
    margin: 16px;
    width: 150px;
    height: 150px;
  }
`;

export const ImagePhotoToCard = styled.img`
  width: 200px;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 8px;
  @media (max-height: ${({ theme }) => theme.mediaQueries.tablet}) {
    width: 150px;
    height: 110px;
  }
`;

export const LinkToTiles = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.whiteText};
`;
