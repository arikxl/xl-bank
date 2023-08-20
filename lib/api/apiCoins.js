const COINS_URL='https://api.coingecko.com/api/v3/coins/'


export const CoinList = (currency) =>
  `${COINS_URL}markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `${COINS_URL}markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const fetchTrendingCoins = async () => {
        const response = await fetch((CoinList('usd')));
        const data = await response.json();
        return data
}
