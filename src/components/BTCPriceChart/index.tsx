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
import { LineChart } from './components';
import { useLineChartHook } from './hooks';
import { customPeriodKeys } from './config';

const BTCPriceChart = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { currency, period, setPeriod, lineChartData } = useLineChartHook();
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
                *Drag and zoom in on the chart and tap to see each data point
              </Typography>
            )}
          </Box>
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
