/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuIcon } from '@components/icons';
import { useTheme } from '@mui/material';
import { useWindowDimensions } from '@src/hooks';
import { navItems } from '../config';

interface NavMenuProps {
  link: string;
}

const MobileNavMenu = ({ link }: NavMenuProps) => {
  const theme = useTheme();
  const { windowDimensions } = useWindowDimensions();
  const { width } = windowDimensions;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          [theme.breakpoints.up('laptop')]: {
            width: theme.spacing(7),
            height: theme.spacing(7),
          },
          '&:hover': {
            backgroundColor: 'rgba(29, 30, 34, 0.3)',
          },
        }}
      >
        <MenuIcon color={theme.palette.primary.main} />
      </IconButton>
      <Menu
        id="basic-menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundImage: 'none',
            borderRadius: theme.spacing(2.25),
            width: theme.spacing(27.5),
            left: `${width - width / 4}px!important` as any,
            [theme.breakpoints.down('laptop')]: {
              width: '70%',
              top: '100px!important' as any,
              left: `${width / 6}px!important` as any,
              backgroundColor: '#1D1E22',
              borderRadius: theme.spacing(2.25),
            },
          },
        }}
      >
        {navItems.map((item, i) => (
          <MenuItem
            key={i}
            onClick={handleClose}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: theme.spacing(2),
              fontWeight: 700,
              height: theme.spacing(5),
              padding: theme.spacing(0, 3),
              '> a': {
                width: '100%',
                textAlign: 'left',
                color:
                  item.link === link
                    ? theme.palette.custom.yellow
                    : theme.palette.primary.main,
                textDecoration: 'none',
              },
            }}
          >
            <Link href={item.link} key={item.display}>
              {item.display}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MobileNavMenu;
