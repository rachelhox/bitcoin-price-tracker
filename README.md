<div style="
  padding: 1rem 0;
">
<p align="center">
  <img src="./public/icons/favicon-32x32.png" style="
    width: 32px
  "/>
</p>

# Bitcoin Price Tracker

A web app displaying bitcoin exchange rates for multiple currencies, currently supporting 13 currencies.

## Price History

A candle stick chart displaying Bitcoin's OHLC (open, high, low, close) prices corresponding to the **selected currency** in a **given time period** (90d, 7d, 1d).

| time period | candle stick  |
| ----------- | ------------- |
| 90 days     | 4-day OHLC    |
| 7 days      | 4-hour OHLC   |
| 1 day       | 30-minut OHLC |

### Feature

**Drag and zoom** function available for users to zoom in on the chart and inspect each data point by hovering over the candle stick.

<p align="center">
<img src="https://media.giphy.com/media/9EYCxE7mu94RYmIN2P/giphy.gif" width="550" />
</p>

## Average Price

A line chart displaying Bitcoin's average prices corresponding to the **selected currency** in a **given time period** (30d, 7d, 1d).

| time period | data interval   |
| ----------- | --------------- |
| 30 days     | hourly          |
| 7 days      | hourly          |
| 1 day       | every 5 minutes |

### Feature

**Drag and zoom** function available for users to zoom in on the chart and inspect each data point by hovering over the line.

<p align="center">
<img src="https://media.giphy.com/media/kymn8ohMCsPsAtRfOc/giphy.gif" width="550" />
</p>

## Latest Price

Displaying the latest Bitcoin prices for all 13 currencies

### Note on development

Once you zoom in on the chart, then switch to a different time period or a different currency, please drag and zoom out the chart again so you can view the whole chart with an updated x/y axis.

All data is real time, updated every 1 minute.

### Main tech stacks

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI v5](https://mui.com/)
- [Victory Chart](https://formidable.com/open-source/victory/)
- [Jest](https://jestjs.io/docs/getting-started)

## Author

- Rachel Ho
