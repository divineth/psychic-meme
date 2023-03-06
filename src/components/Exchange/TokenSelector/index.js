import React, { useState, useEffect } from "react";
import cx from "classnames";
import { BiChevronDown } from "react-icons/bi";
import Modal from "../../Modal/Modal";
import dropDownIcon from "img/DROP_DOWN.svg";
import TooltipWithPortal from "../../Tooltip/TooltipWithPortal";
import { bigNumberify, expandDecimals, formatAmount } from "lib/numbers";
import { getToken } from "config/tokens";
import { importImage } from "lib/legacy";
import { t } from "@lingui/macro";
import { Menu } from "@headlessui/react";
import { IoMdArrowDropdown } from 'react-icons/io'
import "./index.scss";

export default function TokenSelector(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const tokenInfo = getToken(props.chainId, props.tokenAddress);
  const {
    tokens,
    mintingCap,
    infoTokens,
    showMintingCap,
    disabled,
    selectedTokenLabel,
    showBalances = true,
    showTokenImgInDropdown = false,
    showSymbolImage = false,
    showNewCaret = false,
    getTokenState = () => ({ disabled: false, message: null }),
    disableBodyScrollLock,
  } = props;

  const visibleTokens = tokens.filter((t) => !t.isTempHidden);

  const onSelectToken = (token) => {
    // setIsModalVisible(false);
    props.onSelectToken(token);
    console.log("token image: ", tokenImage)
  };

  useEffect(() => {
    if (isModalVisible) {
      setSearchKeyword("");
    }
  }, [isModalVisible]);

  if (!tokenInfo) {
    return null;
  }

  const tokenImage = showSymbolImage && importImage(`ic_${tokenInfo.symbol.toLowerCase()}_24.svg`);
  // const tokenImage = importImage(`ic_${tokenInfo.symbol.toLowerCase()}_24.svg`);

  const onSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredTokens = visibleTokens.filter((item) => {
    return (
      item.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
      item.symbol.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
    );
  });

  const _handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredTokens.length > 0) {
      onSelectToken(filteredTokens[0]);
    }
  };

  return (
    <div className={cx("TokenSelector", { disabled }, props.className)}>
      <Menu>
        <Menu.Button as="div" className="token-selctor-dropdown-button">
          {selectedTokenLabel ? (
            <div className="TokenSelector-box">
              {selectedTokenLabel}
              {!showNewCaret && <BiChevronDown className="TokenSelector-caret" />}
            </div>
          ) : (
            <div className="TokenSelector-box">
              {showSymbolImage && <img src={tokenInfo.imageUrl} alt={tokenInfo.symbol} className="TokenSelector-box-symbol" />}
              {/* <img src={tokenImage} alt={tokenImage} className="TokenSelector-box-symbol" /> */}
              {tokenInfo.symbol}
              {/* {showNewCaret && <img src={dropDownIcon} alt="Dropdown Icon" className="TokenSelector-box-caret" />} */}
              {/* {!showNewCaret && <BiChevronDown className="TokenSelector-caret" />} */}
              <IoMdArrowDropdown color="white" className="TokenSelector-caret" />
            </div>
          )}
        </Menu.Button>
        <Menu.Items as="div" className="menu-items">
          <div className="dropdown-list">
            <div className="TokenSelector-tokens">

              {filteredTokens.map((token, tokenIndex) => {
                const tokenPopupImage = importImage(`ic_${token.symbol.toLowerCase()}_40.svg`);
                let info = infoTokens ? infoTokens[token.address] : {};
                let mintAmount;
                let balance = info.balance;
                if (showMintingCap && mintingCap && info.usdgAmount) {
                  mintAmount = mintingCap.sub(info.usdgAmount);
                }
                if (mintAmount && mintAmount.lt(0)) {
                  mintAmount = bigNumberify(0);
                }
                let balanceUsd;
                if (balance && info.maxPrice) {
                  balanceUsd = balance.mul(info.maxPrice).div(expandDecimals(1, token.decimals));
                }

                const tokenState = getTokenState(info) || {};

                return (
                  <Menu.Item>
                    <div
                      key={token.address}
                      className={cx("TokenSelector-token-row", { disabled: tokenState.disabled })}
                      onClick={() => !tokenState.disabled && onSelectToken(token)}
                    >
                      <div className="Token-info">
                        {showTokenImgInDropdown && <img src={token.imageUrl} alt={token.name} className="token-logo" />}
                        <div className="Token-symbol">
                          <div className="Token-text">{token.symbol}</div>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>
                );
              })}
            </div>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
