export const SUPPORTED_RESOLUTIONS = { 5: "5m", 15: "15m", 60: "1h", 240: "4h", "1D": "1d" };
export const LAST_BAR_REFRESH_INTERVAL = 15000; // 15 seconds
export const TV_CHART_RELOAD_INTERVAL = 15 * 60 * 1000; // 15 minutes

export const tradingCharts = {
    ["FTM"]: {
        id: 'tradingview_98150',
        symbol: 'BINANCE:FTMUSDT',
        src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_56d99&symbol=BINANCE%3AFTMUSDT&interval=240&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BINANCE%3AFTMUSDT#%7B%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D',
    },

    ["ETH"]: {
        id: 'tradingview_5906a',
        symbol: 'BINANCE:ETHUSDT',
        src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_894ab&symbol=BINANCE%3AETHUSDT&interval=240&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BINANCE%3AETHUSDT#%7B%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D',
    },
    ["WBTC"]: {
        id: 'tradingview_6d129',
        symbol: 'BINANCE:BTCUSDT',
        src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_04138&symbol=BINANCE%3ABTCUSDT&interval=240&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BINANCE%3ABTCUSDT#%7B%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D',
    },
    ["DAI"]: {
        id: 'tradingview_bf4b5',
        symbol: 'OKX:DAIUSDT',
        src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_875a9&symbol=OKX%3ADAIUSDT&interval=240&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=OKX%3ADAIUSDT#%7B%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D',
    },
    ["USDC"]: {
        id: 'tradingview_98939',
        symbol: 'OKX:USDCUSDT',
        src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_a66c6&symbol=OKX%3AUSDCUSDT&interval=240&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=OKX%3AUSDCUSDT#%7B%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D',
    },
    ["AURORA"]: {
        id: 'tradingview_2778e',
        symbol: 'GATEIO:AURORAUSDT',
        src: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_bc4bc&symbol=GATEIO%3AAURORAUSDT&interval=240&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=GATEIO%3AAURORAUSDT#%7B%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D',
    },
}

