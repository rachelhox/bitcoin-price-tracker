/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  List,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useGeneralContext } from '@contexts';
import { useWindowDimensions } from '@src/hooks';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { getCurrencyInfo } from '@src/utils';
import { currencyKeys } from './config';
import useStyles from './useStyles';

const CurrencyMenuButton: React.FC = () => {
  const styles = useStyles();
  const { windowDimensions } = useWindowDimensions();
  const { width } = windowDimensions;
  const [currencyAnchor, setCurrencyAnchor] = React.useState<Element>();
  const theme = useTheme();
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.up('laptop'));
  const { currency, setCurrency } = useGeneralContext();
  const currencies = currencyKeys.map((x: string) => getCurrencyInfo(x));

  const onClose = React.useCallback(
    () => setCurrencyAnchor(undefined),
    [setCurrencyAnchor]
  );
  const onItemClick = React.useCallback(
    // eslint-disable-next-line no-undef
    (c: any) => {
      const currencyState = getCurrencyInfo(c.key);
      setCurrency(currencyState);
      onClose();
    },
    [setCurrency, onClose]
  );

  React.useEffect(() => {
    onClose();
  }, [currency]);

  return (
    <>
      {onlyLargeScreen ? (
        <>
          <Button
            onClick={(e) => setCurrencyAnchor(e.currentTarget)}
            css={styles.navBarButton}
            startIcon={
              <CurrencyBitcoinIcon
                width={20}
                height={20}
                fill={theme.palette.common.white}
              />
            }
          >
            {currency.name}
          </Button>
          <Menu
            anchorEl={currencyAnchor}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            open={!!currencyAnchor}
            onClose={onClose}
            id="basic-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            PaperProps={{
              sx: {
                backgroundImage: 'none',
                borderRadius: theme.spacing(2.25),
                width: theme.spacing(27.5),
                top: `${theme.spacing(9)} !important` as any,
                right: `${width - width / 4}px!important` as any,
                backgroundColor: '#1D1E22',
                // [theme.breakpoints.down('laptop')]: {
                //   width: '70%',
                //   top: '75% !important' as any,
                //   bottom: '20px!important' as any,
                //   left: `${width / 6}px!important` as any,
                //   borderRadius: theme.spacing(2.25),
                //   color: theme.palette.common.white,
                // },
              },
            }}
          >
            {currencies
              ?.filter((c) => c !== currency)
              .map((c) => (
                <div key={c.key}>
                  <MenuItem
                    onClick={() => onItemClick(c)}
                    component="a"
                    sx={{
                      display: 'flex',
                      color: theme.palette.common.white,
                      justifyContent: 'flex-start',
                      fontSize: theme.spacing(1.5),
                      fontWeight: 700,
                      height: theme.spacing(5),
                      padding: theme.spacing(0, 3),
                      '> a': {
                        width: '100%',
                        textAlign: 'left',
                        textDecoration: 'none',
                      },
                      '&:hover': {
                        backgroundColor: theme.palette.custom.yellow,
                      },
                    }}
                  >
                    {c.name}
                  </MenuItem>
                </div>
              ))}
          </Menu>
        </>
      ) : (
        <List component="div" disablePadding>
          {currencies
            ?.filter((c) => c !== currency)
            .map((c) => (
              <div key={c.key}>
                <MenuItem
                  onClick={() => onItemClick(c)}
                  component="a"
                  sx={{
                    display: 'flex',
                    color: theme.palette.common.white,
                    justifyContent: 'flex-start',
                    fontSize: theme.spacing(2),
                    fontWeight: 700,
                    height: theme.spacing(5),
                    padding: theme.spacing(0, 3),
                    '> a': {
                      width: '100%',
                      textAlign: 'left',
                      textDecoration: 'none',
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.custom.yellow,
                    },
                  }}
                >
                  {c.name}
                </MenuItem>
              </div>
            ))}
        </List>
      )}
    </>
  );
};

export default CurrencyMenuButton;
