/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Box, Typography, useTheme } from '@mui/material';
import { convertToMoney } from '@utils';
import useStyles from './useStyles';

interface PriceRowProp {
  priceTableData: CurrencyValueProp[];
}

const PriceRow = ({ priceTableData }: PriceRowProp) => {
  const styles = useStyles();
  return (
    <>
      {priceTableData.map((price) => (
        <Box css={styles.row} key={price.key}>
          <Typography variant="h6" css={styles.h6}>
            BTC/{price.key.toUpperCase()}
          </Typography>
          <Box css={styles.price}>
            <Typography variant="body1" css={styles.body1}>
              {convertToMoney(price.value)}
            </Typography>
            <Typography variant="subtitle1" css={styles.subtitle1}>
              {`${price.unit} ${convertToMoney(price.value)}`}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default PriceRow;
