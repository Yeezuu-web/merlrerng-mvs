import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const SwitchMode = () => {
    const { toggleColorMode: toggleMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
      <>
        <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to Dark mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
      </>
  )
}

export default SwitchMode