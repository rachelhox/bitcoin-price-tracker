/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import useStyles from './useStyles';
import { PriceRow } from './components';
import { usePriceTableHook } from './hooks';

const LatestPriceTable = () => {
  const styles = useStyles();
  const { priceTableData } = usePriceTableHook();

  return (
    <Box css={styles.root}>
      <Box css={styles.maxWidth}>
        <Box css={styles.container}>
          <Typography variant="h3" css={styles.h3}>
            *BTC exchange rates update every 1 minute
          </Typography>
        </Box>
        <PriceRow priceTableData={priceTableData} />
      </Box>
    </Box>
  );
};

export default LatestPriceTable;
