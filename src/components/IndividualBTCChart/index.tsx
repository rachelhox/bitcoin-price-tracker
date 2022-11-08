/* eslint-disable no-unused-vars */
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import useStyles from './useStyles';
import { CandleStickChart } from './components';
import { useIndividualChartkHook } from './hooks';

const IndividualBTCChart = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { currency, period, candleChartData } = useIndividualChartkHook();
  // console.log('data', candleChartData);

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
