/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import { TimePeriodButton } from '@components';
import useStyles from './useStyles';
import { LineChart } from './components';
import { useLineChartHook } from './hooks';
import { customPeriodKeys } from './config';

const BTCPriceChart = () => {
  const styles = useStyles();
  const { currency, period, setPeriod, lineChartData } = useLineChartHook();

  return (
    <Box css={styles.root}>
      <Box css={styles.maxWidth}>
        <Box css={styles.container}>
          <Typography variant="h1" css={styles.h1}>
            {`BTC/${currency.key.toUpperCase()}`}
          </Typography>
          <TimePeriodButton
            period={period}
            setPeriod={setPeriod}
            customPeriod={customPeriodKeys}
          />
        </Box>
        <LineChart lineChartData={lineChartData} />
      </Box>
    </Box>
  );
};

export default BTCPriceChart;
