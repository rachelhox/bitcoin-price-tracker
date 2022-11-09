/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import useStyles from './useStyles';
import { CandleStickChart } from './components';
import { useIndividualChartkHook } from './hooks';

const IndividualBTCChart = () => {
  const styles = useStyles();
  const { candleChartData } = useIndividualChartkHook();

  return (
    <Box css={styles.root}>
      <Box css={styles.maxWidth}>
        <Typography css={styles.h6} variant="h6">
          Please select currency
        </Typography>
        <CandleStickChart candleChartData={candleChartData} />
      </Box>
    </Box>
  );
};

export default IndividualBTCChart;
