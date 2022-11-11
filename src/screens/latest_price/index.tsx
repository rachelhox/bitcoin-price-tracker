import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Layout, LatestPriceTable } from '@components';

const LatestPrice = () => {
  const theme = useTheme();
  return (
    <Layout navLink="/latest-price">
      <Box
        sx={{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '65vh',
          userSelect: 'none',
          [theme.breakpoints.up('laptop')]: {
            minHeight: '75vh',
            height: '100vh',
          },
        }}
      >
        <LatestPriceTable />
      </Box>
    </Layout>
  );
};

export default LatestPrice;
