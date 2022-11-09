import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      margin: 'auto',
      [theme.breakpoints.up('laptop')]: {
        width: '70%',
      },
    }),
  };
};

export default useStyles;
