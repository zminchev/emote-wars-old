import useSWR from 'swr';
import { NavItem } from '../models/NavItem';

export const useNavItem = (status: string) => {
  const { data } = useSWR<NavItem[]>(
    status === 'authenticated' ? 'http://localhost:1337/api/nav-items' : null
  );

  return {
    navItems: data,
  };
};
