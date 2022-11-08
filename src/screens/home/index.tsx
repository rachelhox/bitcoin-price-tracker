import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Layout, IndividualBTCChart } from '@components';
import { useWindowDimensions } from '@src/hooks';

const Home = () => {
  const theme = useTheme();
  const { windowDimensions, isDesktop } = useWindowDimensions();
  const { width } = windowDimensions;
  return (
    <Layout navLink="/">
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
        <IndividualBTCChart />
      </Box>
    </Layout>
  );
};

export default Home;
