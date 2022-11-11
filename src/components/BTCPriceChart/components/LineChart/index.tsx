/* eslint-disable no-unused-vars */
import { Box, useTheme, useMediaQuery } from '@mui/material';
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryTheme,
  createContainer,
  VictoryTooltip,
} from 'victory';
import { useGeneralContext } from '@contexts';
import { convertToMoney, padTo2Digits } from '@utils';
import { NoSSR } from '@components';
import useStyles from './useStyles';

interface LineChartProp {
  // eslint-disable-next-line no-undef
  lineChartData: PriceProps[];
}

const VictoryZoomVoronoiContainer: any = createContainer('zoom', 'voronoi');

const LineChart = ({ lineChartData }: LineChartProp) => {
  const styles = useStyles();
  const theme = useTheme();
  const { currency } = useGeneralContext();
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.up('laptop'));
  return (
    <NoSSR>
      <Box css={styles.root}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 10 }}
          padding={{ left: 90, top: 10, right: 0, bottom: 30 }}
          scale={{ x: 'time' }}
          containerComponent={
            <VictoryZoomVoronoiContainer
              labels={({ datum }: any) =>
                `time: ${padTo2Digits(datum.x.getHours())}:${padTo2Digits(
                  datum.x.getMinutes()
                )}\
                    price: ${currency.unit}${convertToMoney(datum.y)}`
              }
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
              disable={!onlyLargeScreen}
            />
          }
        >
          <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
          <VictoryAxis
            dependentAxis
            tickFormat={(t) => [`${currency.unit}${convertToMoney(t)}`]}
          />
          <VictoryLine
            interpolation="natural"
            data={lineChartData}
            style={{
              data: { stroke: theme.palette.custom.yellow, strokeWidth: 1 },
            }}
          />
        </VictoryChart>
      </Box>
    </NoSSR>
  );
};

export default LineChart;
