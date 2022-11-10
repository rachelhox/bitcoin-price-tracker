/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import { TimePeriodButton } from '@components';
import useStyles from './useStyles';
import { CandleStickChart } from './components';
import { useIndividualChartkHook } from './hooks';

const IndividualBTCChart = () => {
  const styles = useStyles();
  const { currency, period, setPeriod, candleChartData } =
    useIndividualChartkHook();

  return (
    <Box css={styles.root}>
      <Box css={styles.maxWidth}>
        <Box css={styles.container}>
          <Typography variant="h1" css={styles.h1}>
            {`BTC/${currency.key.toUpperCase()}`}
          </Typography>
          <TimePeriodButton period={period} setPeriod={setPeriod} />
        </Box>
        <CandleStickChart period={period} candleChartData={candleChartData} />
      </Box>
    </Box>
  );
};

export default IndividualBTCChart;
