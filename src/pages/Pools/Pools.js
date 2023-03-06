import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import GlpSwap from "components/Glp/GlpSwap";
import Footer from "components/Footer/Footer";
import Modal from "components/Modal/Modal";
import "./Pools.scss";

import { Trans } from "@lingui/macro";
import { getNativeToken } from "config/tokens";
import { useChainId } from "lib/chains";
import ExternalLink from "components/ExternalLink/ExternalLink";
import icon from "images/pools/icon.svg"

export default function BuyGlp(props) {
  const { chainId } = useChainId();
  const history = useHistory();
  const [isBuying, setIsBuying] = useState(true);
  const nativeTokenSymbol = getNativeToken(chainId).symbol;
  const [showBuyFlu, setShowBuyFlu] = useState(false);
  const [showSellFlu, setShowSellFlu] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const [showLiquidityInfoFlag, setShowLiquidityInfoFlag] = useState(false);

  useEffect(() => {
    const hash = history.location.hash.replace("#", "");
    const buying = hash === "redeem" ? false : true;
    setIsBuying(buying);
  }, [history.location.hash]);

  function showBuyFluModal() {
    setShowBuyFlu(!showBuyFlu);
    setShowSellFlu(false);
    setShowFlag(!showBuyFlu);
  }

  function showSellFluModal() {
    setShowBuyFlu(false);
    setShowSellFlu(!showSellFlu);
    setShowFlag(!showSellFlu);
  }

  function showLiquidityInfo() {
    setShowLiquidityInfoFlag(!showLiquidityInfoFlag);
  }

  return (
    <div className="Pools-container">
      <div className="default-container page-layout">
        {/* <div className="section-title-block">
          <div className="section-title-content">
            <div className="Page-title">
              <Trans>Buy / Sell GLP</Trans>
            </div>
            <div className="Page-description">
              <Trans>
                Purchase <ExternalLink href="https://gmxio.gitbook.io/gmx/glp">GLP tokens</ExternalLink> to earn{" "}
                {nativeTokenSymbol} fees from swaps and leverages trading.
              </Trans>
              <br />
              <Trans>
                View <Link to="/earn">staking</Link> page.
              </Trans>
            </div>
          </div>
        </div> */}
        <div className="section-title-block">
          {/* <div className="section-title-icon"></div> */}
          <div className="section-title-content">
            <div className="Page-title">
              <Trans>Pools</Trans>
            </div>
            <div className="Page-description">
              <Trans>
                Stake Flux (FLU) to earn rewards.
                {/* Stake <ExternalLink href="https://gmxio.gitbook.io/gmx/tokenomics">GMX</ExternalLink> and{" "} */}
                {/* <ExternalLink href="https://gmxio.gitbook.io/gmx/glp">GLP</ExternalLink> to earn rewards. */}
              </Trans>
            </div>
            {/* {earnMsg && <div className="Page-description">{earnMsg}</div>} */}
          </div>
          <div className="section-title-btn-container">
            <div className="section-title-buy-sell-container">
              {/* <button type="submit" onClick={connectWallet}> */}
              <button type="submit" onClick={showBuyFluModal}>
                <Trans>BUY FLU</Trans>
              </button>
              <button type="submit" onClick={showSellFluModal}>
                <Trans>SELL FLU</Trans>
              </button>
            </div>
            {/* <div className="section-title-liquidity-container">
              <p> <Trans>ADD LIQUIDITY</Trans></p>
            </div> */}

          </div>
        </div>

        <div className="pool-overview-contrainer">
          <div className="pool-overview-title">
            <p> <Trans>YOUR LIQUIDITY OVERVIEW </Trans></p>
          </div>
          <div className="pool-overview-content">
            <div className="pool-statistics-card">
              <div className="pool-statistics-card-title">
                <p> <Trans>Your Total Liquidity</Trans></p>
                <a>
                  <img src={icon} />
                </a>
              </div>
              <div className="pool-statistics-card-content">
                <p> $2700.90 </p>
                <p> </p>
              </div>
            </div>
            <div className="pool-statistics-card">
              <div className="pool-statistics-card-title">
                <p> <Trans>Your Liquidity Fee Earnings</Trans></p>
                <a>
                  <img src={icon} />
                </a>
              </div>
              <div className="pool-statistics-card-content">
                <p> $2700.90 </p>
                <p> </p>
              </div>
            </div>
            <div className="pool-statistics-card">
              <div className="pool-statistics-card-title">
                <p> <Trans>Your Total Rewards</Trans></p>
                <a>
                  <img src={icon} />
                </a>
              </div>
              <div className="pool-statistics-card-content">
                <p> $2700.90 </p>
                <p onClick={showLiquidityInfo}> View </p>
              </div>
            </div>
          </div>
        </div>
        <div className="liquidity-info-container">

        <Modal isVisible={showLiquidityInfoFlag} setIsVisible={setShowLiquidityInfoFlag}>
          <div className="liquidity-info-title">
          <img src={icon} />
            <p> This is your current liquidity in Flux v1.</p>
          </div>
          <div className="liquidity-info-content">
            <span>Note: </span>
            Your total liquidity may fluctuate due to the inherent slippage when users make transfers across chains with imbalanced liquidity.
          </div>
        </Modal>
        </div>
        <div className="glp-modal">
          <Modal isVisible={showFlag} setIsVisible={setShowFlag}>
            <GlpSwap {...props} isBuying={showBuyFlu == true ? isBuying : !isBuying} setIsBuying={setIsBuying} />
          </Modal>
        </div>
        <div className="glp-table">
          <GlpSwap {...props} isBuying={true} setIsBuying={setIsBuying} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
