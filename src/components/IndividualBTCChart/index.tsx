/* eslint-disable no-unused-vars */
import {
  Box,
  Tooltip,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TimePeriodButton } from '@components';
import useStyles from './useStyles';
import { CandleStickChart } from './components';
import { useIndividualChartkHook } from './hooks';

const IndividualBTCChart = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { currency, period, setPeriod, candleChartData } =
    useIndividualChartkHook();
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.up('laptop'));

  return (
    <Box css={styles.root}>
      <Box css={styles.maxWidth}>
        <Box css={styles.container}>
          <Box css={styles.title}>
            <Typography variant="h1" css={styles.h1}>
              {`BTC/${currency.key.toUpperCase()}`}
            </Typography>
            {onlyLargeScreen ? (
              <Tooltip title="Drag and zoom in on the chart and hover to see each data point">
                <IconButton>
                  <InfoOutlinedIcon color="primary" />
                </IconButton>
              </Tooltip>
            ) : (
              <Typography variant="h3" css={styles.h3}>
                *Tap to see each data point on the chart
              </Typography>
            )}
          </Box>
          <TimePeriodButton period={period} setPeriod={setPeriod} />
        </Box>
        <CandleStickChart period={period} candleChartData={candleChartData} />
      </Box>
    </Box>
  );
};

export default IndividualBTCChart;
