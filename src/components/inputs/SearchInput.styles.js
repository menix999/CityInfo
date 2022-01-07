import styled from "styled-components";

export const SearchInput = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  border-radius: 8px;
  outline: none;
  width: 160px;
  height: 32px;
  border: 0.5px solid black;
  overflow: hidden;
  text-indent: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  box-shadow: -1px 0.5px 0.5px black;
  color: ${({ theme }) => theme.colors.whiteText};
  ::placeholder {
    color: ${({ theme }) => theme.colors.whiteText};
  }
`;
