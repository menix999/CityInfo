import * as Styled from "./SearchInput.styles";

export const SearchInput = ({ children }) => {
  return (
    <>
      <Styled.SearchInput placeholder="Search...">
        {children}
      </Styled.SearchInput>
    </>
  );
};
