import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    row: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1, 0),
      [theme.breakpoints.up('laptop')]: {
        width: '100%',
        padding: theme.spacing(2, 0),
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
      fontWeight: 500,
      [theme.breakpoints.up('laptop')]: {
        fontSize: theme.spacing(3),
        fontWeight: 500,
      },
    }),
    subtitle1: css({
      fontSize: theme.spacing(1),
      color: theme.palette.custom.gray,
      [theme.breakpoints.up('laptop')]: {
        fontSize: theme.spacing(2),
      },
    }),
  };
};

export default useStyles;
