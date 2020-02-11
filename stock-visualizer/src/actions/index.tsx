import axios from 'axios';

export const STOCK_TIME_SERIES_DAILY = 'STOCK_TIME_SERIES_DAILY';

export const getDailyStockTimeSeries = (symbol: string) => async (
  dispatch: any,
) => {
  try {
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=P3A56G4UTD9OQJNH&datatype=json`,
    );
    dispatch({ type: STOCK_TIME_SERIES_DAILY, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const STOCK_TIME_SERIES_WEEKLY = 'STOCK_TIME_SERIES_WEEKLY';
export const STOCK_TIME_SERIES_MONTHLY = 'STOCK_TIME_SERIES_MONTHLY';
export const MULTIPLE_STOCKS_SERIES_MONTHLY = 'MULTIPLE_STOCKS_SERIES_MONTHLY';
