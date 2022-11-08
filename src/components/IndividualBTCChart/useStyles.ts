import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      padding: theme.spacing(0, 3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // minHeight: '140vh',
      [theme.breakpoints.down('laptop')]: {
        minHeight: 'auto',
      },
      [theme.breakpoints.up('laptop')]: {
        height: '100vh',
        // minHeight: '100vh',
        // marginBottom: '250px',
      },
    }),
    maxWidth: css({
      width: '80%',
      [theme.breakpoints.up('laptop')]: { maxWidth: '1200px' },
    }),
    h6: css({
      paddingTop: theme.spacing(15),
    }),
  };
};

export default useStyles;
