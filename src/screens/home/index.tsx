import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Layout, IndividualBTCChart } from '@components';

const Home = () => {
  const theme = useTheme();
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
