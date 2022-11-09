/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from 'next/link';
import { Box, useTheme } from '@mui/material';
import { navItems } from '../config';
import CurrencyMenuButton from '../currency_menu_button';

interface NavMenuProps {
  link: string;
}

const DesktopNavMenu = ({ link }: NavMenuProps) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
    >
      {navItems.map((item, i) => {
        let mainColor = 'none';
        if (item.link === link) {
          mainColor = 'rgba(116, 136, 188, 0.45)';
        }
        return (
          <Box
            key={i}
            sx={{
              borderRadius: '220px',
              background: mainColor,
              margin: item.link === link ? 0 : theme.spacing(0, 2),
              padding: item.link === link ? '13px 16px' : 0,
              '> a': {
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: theme.spacing(2),
                color:
                  item.link === link
                    ? theme.palette.custom.yellow
                    : theme.palette.primary.main,
                userSelect: 'none',
              },
            }}
          >
            <Link href={item.link} key={item.display}>
              {item.display}
            </Link>
          </Box>
        );
      })}
      <Box>
        <CurrencyMenuButton />
      </Box>
    </Box>
  );
};

export default DesktopNavMenu;
