import { useCallback, useEffect, useRef, useState, } from "react";
// import { TV_CHART_RELOAD_TIMESTAMP_KEY, TV_SAVE_LOAD_CHARTS_KEY } from "config/localStorage";
// import { useLocalStorage, useMedia } from "react-use";
// import { defaultChartProps, disabledFeaturesOnMobile } from "./constants";
import useTVDatafeed from "domain/tradingview/useTVDatafeed";
// import { ChartData, IChartingLibraryWidget, IPositionLineAdapter } from "../../charting_library";
// import { getObjectKeyFromValue } from "domain/tradingview/utils";
// import { SaveLoadAdapter } from "./SaveLoadAdapter";
import { SUPPORTED_RESOLUTIONS, tradingCharts, TV_CHART_RELOAD_INTERVAL } from "config/tradingview";
// import { isChartAvailabeForToken } from "config/tokens";
import { Helmet } from "react-helmet";

type ChartLine = {
  price: number;
  title: string;
};

let tvScriptLoadingPromise;

type Props = {
  symbol: string;
  chainId: number;
  savedShouldShowPositionLines: boolean;
  chartLines: ChartLine[];
  onSelectToken: () => void;
  period: string;
  setPeriod: (period: string) => void;
};

export default function TVChartContainer({
  symbol,
  chainId,
  savedShouldShowPositionLines,
  chartLines,
  onSelectToken,
  period,
  setPeriod,
}: Props) {
  console.log("symbol:   ", symbol);
  const [currentTradingChart, setCurrentTradingChart] = useState(tradingCharts[symbol]);

  useEffect(() => {
    setCurrentTradingChart(tradingCharts[symbol]);
  }, [symbol])


  return (
    <div
      id={currentTradingChart?.id}
      className="TVChartContainer ExchangeChart-bottom-content"
      style={{
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'relative',
          boxSizing: 'content-box',
          width: '100%',
          height: '100%',
          margin: '0 auto !important',
          padding: '0!important',
          fontFamily: 'Roboto, Ubuntu, sans- serif'
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          padding: '0px !important',
        }}>
          <iframe
            id={currentTradingChart?.id}
            src={currentTradingChart?.src}
            style={{
              width: '100%',
              height: '100%',
              margin: '0!important',
              padding: '0!important',
              border: 'none',
            }}
          >
          </iframe>
        </div>
      </div>
    </div >
  )
}