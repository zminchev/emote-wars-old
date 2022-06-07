import { Box } from "@chakra-ui/react";
import React from "react";

interface CardProps {
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  id?: string;
  children: JSX.Element;
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({
  isActive,
  isDisabled,
  onClick,
  id,
  width,
  height,
  children,
}) => {
  return (
    <Box
      pointerEvents={isDisabled ? "none" : "auto"}
      opacity={isDisabled ? "0.5" : "1"}
      w={width ? width : "25%"}
      h={height ? height : "100%"}
      mr="1"
      border="1px solid"
      borderColor={isActive ? "whiteAlpha.900" : "whiteAlpha.600"}
      bgColor={isActive ? "blackAlpha.300" : ""}
      borderRadius="6"
      _hover={{ cursor: "pointer", backgroundColor: "blackAlpha.200" }}
      onClick={onClick}
      id={id}
    >
      {children}
    </Box>
  );
};

export default Card;
