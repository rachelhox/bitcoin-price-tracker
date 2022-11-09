import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    box: css({
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up('laptop')]: {
        padding: 0,
      },
    }),
    buttonGroup: css({
      color: theme.palette.custom.yellow,
    }),
  };
};

export default useStyles;
