import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      padding: theme.spacing(0, 3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('laptop')]: {
        minHeight: 'auto',
      },
      [theme.breakpoints.up('laptop')]: {
        height: '100vh',
      },
    }),
    maxWidth: css({
      width: '100%',
      [theme.breakpoints.up('tablet')]: { maxWidth: '1200px', width: '80%' },
    }),
    container: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: theme.spacing(15),
      [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
      },
    }),
    h1: css({
      fontSize: theme.spacing(3),
      color: theme.palette.primary.main,
      padding: theme.spacing(0, 0, 2, 0),
      [theme.breakpoints.up('laptop')]: {
        fontSize: theme.spacing(6),
        padding: 0,
      },
    }),
  };
};

export default useStyles;
