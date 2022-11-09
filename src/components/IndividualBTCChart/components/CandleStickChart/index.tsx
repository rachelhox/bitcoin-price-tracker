/* eslint-disable no-unused-vars */
import { Box, useTheme } from '@mui/material';
import {
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme,
  VictoryZoomContainer,
  VictoryTooltip,
} from 'victory';
import { useGeneralContext } from '@contexts';
import { convertToMoney } from '@utils';
import useStyles from './useStyles';

interface CandleStickChartProp {
  // eslint-disable-next-line no-undef
  candleChartData: OHLCProps[];
}

const CandleStickChart = ({ candleChartData }: CandleStickChartProp) => {
  const styles = useStyles();
  const theme = useTheme();
  const { currency } = useGeneralContext();
  return (
    <Box css={styles.root}>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 10 }}
        padding={{ left: 60, top: 10, right: 0, bottom: 30 }}
        scale={{ x: 'time' }}
        containerComponent={<VictoryZoomContainer />}
      >
        <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => [`${currency.unit}${convertToMoney(t)}`]}
        />
        <VictoryCandlestick
          candleColors={{
            positive: theme.palette.custom.green,
            negative: theme.palette.custom.red,
          }}
          candleWidth={5}
          data={candleChartData}
          labels={({ datum }: any) => [
            `date: ${datum.x.getDate()}/${datum.x.getMonth()}`,
            `open: ${currency.unit}${convertToMoney(datum.open)}`,
            `high: ${currency.unit}${convertToMoney(datum.high)}`,
            `low: ${currency.unit}${convertToMoney(datum.low)}`,
            `close: ${currency.unit}${convertToMoney(datum.close)}`,
          ]}
          labelComponent={
            <VictoryTooltip
              cornerRadius={8}
              flyoutStyle={{
                fill: theme.palette.common.black,
                color: theme.palette.common.white,
                stroke: theme.palette.common.white,
              }}
              style={{
                fill: theme.palette.common.white,
                fontSize: 8,
              }}
            />
          }
        />
      </VictoryChart>
    </Box>
  );
};

export default CandleStickChart;
