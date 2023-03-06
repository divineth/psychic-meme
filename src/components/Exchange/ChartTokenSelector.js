import React, { useEffect } from "react";
import { Menu } from "@headlessui/react";
import { IoMdArrowDropdown } from 'react-icons/io'
import cx from "classnames";
import "./ChartTokenSelector.scss";
import { LONG, SHORT, SWAP } from "lib/legacy";
import { getTokens, getWhitelistedTokens } from "config/tokens";
import usdtLogo from "images/token-logo/usdt-logo.svg";

export default function ChartTokenSelector(props) {
  const { chainId, selectedToken, onSelectToken, swapOption } = props;

  const isLong = swapOption === LONG;
  const isShort = swapOption === SHORT;
  const isSwap = swapOption === SWAP;

  let options = getTokens(chainId);
  const whitelistedTokens = getWhitelistedTokens(chainId);

  const indexTokens = whitelistedTokens.filter((token) => !token.isStable && !token.isWrapped);
  const shortableTokens = indexTokens.filter((token) => token.isShortable);

  if (isLong) {
    options = indexTokens;
  }
  if (isShort) {
    options = shortableTokens;
  }

  const onSelect = async (token) => {
    onSelectToken(token);
  };

  var value = selectedToken;

  return (
    <Menu>
      <Menu.Button as="div" disabled={isSwap}>
        <div className='trade-pair-selection'>
          <div className='trade-pair-logo'>
            <div className="pair-first-token-logo-wrapper">
              <img src={value.imageUrl} />
            </div>
            <img
              src={usdtLogo}
              className="pair-second-token-logo"
            />
          </div>
          <button className={cx("App-cta small transparent chart-token-selector", { "default-cursor": isSwap })}>
            <span className="chart-token-selector--current">{value.symbol} / USDT</span>
            {!isSwap && <IoMdArrowDropdown />}
          </button>
        </div>
      </Menu.Button>
      <div className="chart-token-menu">
        <Menu.Items as="div" className="menu-items chart-token-menu-items">
          {options.map((option, index) => (
            <Menu.Item key={index}>
              <div
                className="menu-item"
                onClick={() => {
                  onSelect(option);
                }}
              >
                <div className='trade-pair-logo'>
                  <div className="pair-first-token-logo-wrapper">
                    <img src={option.imageUrl} />
                  </div>
                  <img
                    src={usdtLogo}
                    className="pair-second-token-logo"
                  />
                </div>
                <span style={{ marginLeft: 5 }} className="token-label">
                  {option.symbol} / USDT
                </span>
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu >
  );
}
