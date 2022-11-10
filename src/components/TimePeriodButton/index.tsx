/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from './useStyles';
import { periodKeys } from './config';

interface TimePeriodButtonProps {
  period: number;
  setPeriod: React.Dispatch<React.SetStateAction<number>>;
  customPeriod?: number[];
}

const TimePeriodButton = ({
  period,
  setPeriod,
  customPeriod,
}: TimePeriodButtonProps) => {
  const theme = useTheme();
  const styles = useStyles();
  const onTimeClick = React.useCallback(
    (p: any) => {
      setPeriod(p);
    },
    [period, setPeriod]
  );
  return (
    <Box css={styles.box}>
      <ButtonGroup aria-label="medium button group" css={styles.buttonGroup}>
        {customPeriod
          ? customPeriod.map((p: number) => (
              <Button
                onClick={() => onTimeClick(p)}
                sx={{
                  background:
                    p === period ? theme.palette.custom.yellow : 'transparent',
                  color:
                    p === period
                      ? theme.palette.common.black
                      : theme.palette.common.white,
                  '&:hover': {
                    backgroundColor:
                      p === period
                        ? theme.palette.custom.yellow
                        : 'transparent',
                  },
                }}
                key={p}
              >{`${p}d`}</Button>
            ))
          : periodKeys.map((p: number) => (
              <Button
                onClick={() => onTimeClick(p)}
                sx={{
                  background:
                    p === period ? theme.palette.custom.yellow : 'transparent',
                  color:
                    p === period
                      ? theme.palette.common.black
                      : theme.palette.common.white,
                  '&:hover': {
                    backgroundColor:
                      p === period
                        ? theme.palette.custom.yellow
                        : 'transparent',
                  },
                }}
                key={p}
              >{`${p}d`}</Button>
            ))}
      </ButtonGroup>
    </Box>
  );
};

export default TimePeriodButton;
