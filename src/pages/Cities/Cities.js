import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Center,
  Image,
} from "@chakra-ui/react";
import { fetchData } from "../../features/citySlice";
import { SearchIcon } from "@chakra-ui/icons";
import { colors } from "../../styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Cities = () => {
  const dispatch = useDispatch();
  const cityInformations = useSelector((state) => state.cities.cityInformation);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {cityInformations.map((city) => city.Name)}
      <Box height="100vh" width="100%" bg={colors.backgroundMain}>
        <Center>
          <Box paddingTop={10}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color={colors.iconColor} />}
              />
              <Input
                _placeholder={{ color: `${colors.whiteText}` }}
                placeholder="Search"
                variant="outline"
                color={colors.whiteText}
                bg={colors.backgroundButton}
                borderColor={colors.backgroundButton}
                width="20vh"
              />
            </InputGroup>
          </Box>
        </Center>

        <Center>
          <Box
            width="100vh"
            maxWidth="100vh"
            height="70vh"
            marginTop={24}
            display="flex"
            flexWrap="wrap"
            paddingLeft="24"
          >
            <Box
              width="200px"
              height="200px"
              bg="green"
              borderRadius="8"
              margin={8}
              flexWrap="wrap"
            >
              <Image
                src="https://source.unsplash.com/user/c_v_r"
                borderRadius="8"
              />
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Cities;
