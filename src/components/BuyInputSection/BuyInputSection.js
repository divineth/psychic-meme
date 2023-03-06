import React from "react";
import cx from "classnames";
import "./BuyInputSection.css";
import { Trans } from "@lingui/macro";
import { Menu } from "@headlessui/react";
import AssetDropdown from "../../pages/Dashboard/AssetDropdown";

import ethLogo from '../../images/token-logo/ethereum-logo.svg';
import btcLogo from '../../images/token-logo/bitcoin-logo.svg';
import linkLogo from '../../images/token-logo/chainlink-logo.svg';
import uniLogo from '../../images/token-logo/uniswap-logo.svg';
import usdcLogo from '../../images/token-logo/usdc-logo.svg';
import usdtLogo from '../../images/token-logo/usdt-logo.svg';
import daiLogo from '../../images/token-logo/dai-logo.svg';
import fraxLogo from '../../images/token-logo/frax-logo.svg';
import auroraLogo from '../../images/token-logo/aurora-logo.svg';
import fantomLogo from '../../images/token-logo/fantom-logo.svg';

export default function BuyInputSection(props) {
  const {
    topLeftLabel,
    topRightLabel,
    onClickTopRightLabel,
    inputValue,
    onInputValueChange,
    onClickMax,
    showMaxButton,
    staticInput,
    balance,
    tokenBalance,
  } = props;

  return (
    <div className="Exchange-swap-section buy-input">

      <div className="PositionEditor-token-symbol">{props.children}</div>
      {/* <div className="Exchange-menu-wrapper" >
        <Menu>
          <Menu.Button as="div">
            <button className="App-cta small transparen flu-btn">
              <img src={fantomLogo} />
              <p>FTM</p>
              <AssetDropdown />
            </button>
          </Menu.Button>
          <div className="flu-menu-items-wrapper" >
            <Menu.Items as="div" className="menu-items">
              <Menu.Item>
                <div
                  className="menu-item"
                >
                  <a href="">
                    <img src={btcLogo}/>
                    BTC
                  </a>
                </div>
              </Menu.Item>
           
              <Menu.Item>
                <div
                  className="menu-item"
                >
                  <a href="">
                    <img src={ethLogo}/>
                    ETH
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div
                  className="menu-item"
                >
                  <a href="">
                    <img src={usdcLogo}/>
                    USDC
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div
                  className="menu-item"
                >
                  <a href="">
                    <img src={daiLogo}/>
                    DAI
                  </a>
                </div>
              </Menu.Item>
            </Menu.Items>
          </div>
        </Menu>
      </div> */}
      <div className="Exchange-swap-section-top">
        <div className="muted">
          {topLeftLabel}
        </div>
        <div className="Exchange-swap-input-container">
          {showMaxButton && (
            <div className="Exchange-swap-max" onClick={onClickMax}>
              <Trans>MAX</Trans>
            </div>
          )}
          {!staticInput && (
            <input
              type="number"
              min="0"
              placeholder="0.0"
              className="Exchange-swap-input"
              value={inputValue}
              onChange={onInputValueChange}
            />
          )}
          {staticInput && <div className="InputSection-static-input">{inputValue}</div>}
        </div>
      </div>
      <div className="Exchange-swap-section-bottom">
        <div className={cx({ clickable: onClickTopRightLabel })} onClick={onClickTopRightLabel}>
          <span className="Exchange-swap-label muted">{topRightLabel}</span>&nbsp;
          <span className="Exchange-swap-balance">
            ${tokenBalance} {/*(selectedToken && selectedToken.symbol) || defaultTokenName*/}
          </span>
        </div>
      </div>
    </div>
  );
}
