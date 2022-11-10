import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Layout, BTCPriceChart } from '@components';

const AveragePrice = () => {
  const theme = useTheme();
  return (
    <Layout navLink="/average-price">
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
        <BTCPriceChart />
      </Box>
    </Layout>
  );
};

export default AveragePrice;
