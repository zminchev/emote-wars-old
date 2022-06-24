import { Box } from '@chakra-ui/react';
import React from 'react';
import { User } from '../../../models/User';
import ResourceItem from '../ResourceItem';

interface ResourcesDisplayProps {
  user: User | undefined;
}

const ResourcesDisplay: React.FC<ResourcesDisplayProps> = ({ user }) => {
  return (
    <Box display="flex" gap={6} w="85%" justifyContent="center">
      <ResourceItem
        name="Gold"
        value={user?.gold}
        image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933196/resources/gold_coysi7.png"
      />
      <ResourceItem
        name="Wood"
        value={user?.wood}
        image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/wood_zdkklt.png"
      />
      <ResourceItem
        name="Food"
        value={user?.food}
        image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/food_xouuhs.png"
      />
      <ResourceItem
        name="Diamonds"
        value={user?.diamonds}
        image="https://res.cloudinary.com/duf8bd8co/image/upload/v1653933195/resources/diamond_brpl9a.png"
      />
    </Box>
  );
};

export default ResourcesDisplay;
