import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    row: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.up('laptop')]: {
        width: '100%',
      },
    }),
    h6: css({
      color: theme.palette.primary.main,
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.up('laptop')]: {
        fontSize: theme.spacing(4),
      },
    }),
    price: css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    }),
    body1: css({
      color: theme.palette.primary.main,
      fontSize: theme.spacing(2),
      [theme.breakpoints.up('laptop')]: {
        fontSize: theme.spacing(3),
      },
    }),
    subtitle1: css({
      fontSize: theme.spacing(1),
      color: theme.palette.custom.gray,
      [theme.breakpoints.up('laptop')]: {
        fontSize: theme.spacing(1.5),
      },
    }),
  };
};

export default useStyles;
