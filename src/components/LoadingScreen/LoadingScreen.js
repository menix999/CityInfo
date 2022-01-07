import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: solid 5px ${({ theme }) => theme.colors.backgroundButton};
  border-top: solid 5px ${({ theme }) => theme.colors.backgroundMain};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  animation: ${loading} 1s infinite linear;
`;

const LoadingScreen = () => {
  return <Loader></Loader>;
};

export default LoadingScreen;
