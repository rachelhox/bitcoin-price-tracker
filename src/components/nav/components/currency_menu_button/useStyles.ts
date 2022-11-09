import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    navBarButton: css({
      '&:hover': {
        backgroundColor: theme.palette.custom.yellow,
      },
    }),
  };
};

export default useStyles;
