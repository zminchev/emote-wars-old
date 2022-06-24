import { Heading } from '@chakra-ui/react';
import React, { useMemo } from 'react';

interface PageHeaderProps {
  text: string;
  textAlign?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  color?: string;
  type?: 'secondary' | 'primary';
}

const PageHeader: React.FC<PageHeaderProps> = ({
  text,
  textAlign,
  mt,
  mb,
  ml,
  mr,
  color,
  type,
}) => {
  let align: any = textAlign;

  const headerType = useMemo(() => {
    if (type === 'secondary') {
      return 'lg';
    }

    if (type === 'primary') {
      return '3xl';
    }

    return type;
  }, [type]);

  return (
    <Heading
      textAlign={align}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      color={color}
      size={headerType}
    >
      {text}
    </Heading>
  );
};

export default PageHeader;
