/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
  IconButton,
  Button,
} from '@mui/material';
import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme,
} from 'victory';
import useStyles from './useStyles';
import { useIndividualChartkHook } from './hooks';

const IndividualBTCChart = () => {
  const styles = useStyles();
  const theme = useTheme();
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.up('laptop'));
  const candleChartData = useIndividualChartkHook();
  //   console.log('data', candleChartData);

  return (
    <Box css={styles.root}>
      <Typography variant="h6">Please select currency</Typography>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: 'time' }}
      >
        <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{ positive: '#5f5c5b', negative: '#c43a31' }}
          data={candleChartData}
        />
      </VictoryChart>
    </Box>
  );
};

export default IndividualBTCChart;
