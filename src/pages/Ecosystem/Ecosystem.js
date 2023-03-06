import React from "react";
import { Trans } from "@lingui/macro";
import SEO from "components/Common/SEO";

import Footer from "components/Footer/Footer";
import { getPageTitle } from "lib/legacy";

import "./Ecosystem.scss";
import ExternalLink from "components/ExternalLink/ExternalLink";
import { ARBITRUM, AVALANCHE } from "config/chains";
import { t } from "@lingui/macro";
import { getIcon } from "config/icons";

import deBankLogo from "images/ecosystem/debank-logo.svg";
import defiLamaLogo from 'images/ecosystem/defi-llama-logo.svg';
import dopexLogo from 'images/ecosystem/dopex-logo.svg';
import rookLogo from 'images/ecosystem/rook-logo.svg';
import jonesDaoLogo from 'images/ecosystem/jones-dao-logo.svg';
import yieldYakOptimizerLogo from 'images/ecosystem/yield-yark-optimizer.svg';
import vovoFinanceLogo from 'images/ecosystem/vovo-finance-logo.svg';
import stabilizeProtocolLogo from 'images/ecosystem/stabilize-protocol-logo.svg';
import dodoLogo from 'images/ecosystem/debank-logo.svg';
import openOceanLogo from 'images/ecosystem/open-ocean-logo.svg';
import paraswapLogo from 'images/ecosystem/paraswap-logo.svg';
import _1inchLogo from 'images/ecosystem/1inch-logo.svg';
import dashboardItemLogo from 'images/ecosystem/ecosystem-dashboard-item-logo.svg';

const NETWORK_ICONS = {
  [ARBITRUM]: getIcon(ARBITRUM, "network"),
  [AVALANCHE]: getIcon(AVALANCHE, "network"),
};

const NETWORK_ICON_ALTS = {
  [ARBITRUM]: "Arbitrum Icon",
  [AVALANCHE]: "Avalanche Icon",
};

export default function Ecosystem() {
  const PartnershipsAndIntegrationsData = [
    {
      id: 1,
      logo: deBankLogo,
      name: 'DeBank',
      description: 'DeFi Portfolio Tracker',
      link: 'fluxreferrals.com',
      creator: '@kyzoeth',
    },
    {
      id: 2,
      logo: defiLamaLogo,
      name: 'Defi Llama',
      description: 'Decentralized Finance Dashboard',
      link: 'fluxterminal.com',
      creator: '@vipineth',
    },

    {
      id: 3,
      logo: dopexLogo,
      name: 'Dopex',
      description: 'Decentralized Options Protocol',
      link: 'fluxstats.com',
      creator: '@CryptoMessiah',
    },
    {
      id: 4,
      logo: rookLogo,
      name: 'Rook',
      description: 'MEV Optimizer',
      link: 'tokenterminal.com',
      creator: '@tokenterminal',
    },

    {
      id: 5,
      logo: jonesDaoLogo,
      name: 'Jones DAO',
      description: 'Decentralized Options Protocoll',
      link: 'cryptofees.info',
      creator: '@CryptoFeesInfo',
    },
    {
      id: 6,
      logo: yieldYakOptimizerLogo,
      name: 'Yield Yak Optimizer',
      description: 'Yield Optimizer on Avalanche',
      link: 'dune.com',
      creator: '@JamesCliffyz',
    },

    {
      id: 7,
      logo: vovoFinanceLogo,
      name: 'Vovo Finance',
      description: 'Structured Products',
      link: 'dune.com',
      creator: '@JamesCliffyz',
    },
    {
      id: 8,
      logo: stabilizeProtocolLogo,
      name: 'Stabilize Protocol',
      description: 'Yield Vaults',
      link: 'laevitas.ch',
      creator: '@laevitas1',
    },

    {
      id: 9,
      logo: dodoLogo,
      name: 'DODO',
      description: 'Decentralized Trading Protocol',
      link: 'laevitas.ch',
      creator: '@laevitas1',
    },
    {
      id: 10,
      logo: openOceanLogo,
      name: 'Open Ocean',
      description: 'DEX Aggregator',
      link: 'laevitas.ch',
      creator: '@laevitas1',
    },

    {
      id: 11,
      logo: paraswapLogo,
      name: 'Paraswap',
      description: 'DEX Aggregator',
      link: 'laevitas.ch',
      creator: '@laevitas1',
    },
    {
      id: 12,
      logo: _1inchLogo,
      name: '1inch',
      description: 'DEX Aggregator',
      link: 'laevitas.ch',
      creator: '@laevitas1',
    }
  ];
  const description = 'Dashboard for Flux referral stats';
  const DashoboardsData = [
    {
      id: 1,
      name: 'Flux Referrals Dashboard',
      link: 'fluxreferrals.com',
      creator: '@kyzoeth',
    },
    {
      id: 2,
      name: 'Flux Terminal',
      link: 'fluxterminal.com',
      creator: '@vipineth',
    },
    {
      id: 3,
      name: 'Flux Analytics',
      link: 'fluxstats.com',
      creator: '@CryptoMessiah',
    },
    {
      id: 4,
      name: 'TokenTerminal',
      link: 'tokenterminal.com',
      creator: '@tokenterminal',
    },

    {
      id: 5,
      name: 'CryptoFees',
      link: 'cryptofees.info',
      creator: '@CryptoFeesInfo',
    },
    {
      id: 6,
      name: 'Shogun Dashboard (Dune Arbitrum)',
      link: 'dune.com',
      creator: '@JamesCliffyz',
    },

    {
      id: 7,
      name: 'Shogun Dashboard (Dune Avalanche)',
      link: 'dune.com',
      creator: '@JamesCliffyz',
    },
    {
      id: 8,
      name: 'Flux Perpetuals Data',
      link: 'laevitas.ch',
      creator: '@laevitas1',
    },
  ];

  return (
    <SEO title={getPageTitle("Ecosystem Projects")}>
      <div className="Ecosystem">
        <div className="default-container page-layout">
          <div>
            <div className="section-title-block">
              <div className="section-title-icon" />
              <div className="section-title-content">
                <div className="Page-title">
                  <Trans>Partnerships and Integrations</Trans>
                </div>
                <div className="Page-description">
                  <Trans>Projects integrated with Flux</Trans>
                </div>
              </div>
            </div>
            <div className="DashboardV2-projects">
              {PartnershipsAndIntegrationsData.map((item) => {
                return (
                  <div className="Ecosystem-card" key={item.name}>
                    <div className="Ecosystem-title-container">

                      <img src={item.logo} />
                      <div>
                        <p className="Ecosystem-name">{item.name}</p>
                        <p className="Ecosystem-description">{item.description}</p>
                      </div>
                    </div>
                    <div className="Ecosystem-divider"></div>
                    <div className="Ecosystem-content">
                      <p>
                        Link: {' '}
                        <a href={"https://" + item.link}>
                          {item.link}
                        </a>
                      </p>
                      <div className="Ecosystem-content-divider">|</div>
                      <p>
                        Creator: {' '}
                        <a href={"https://" + item.creator}>
                          {item.creator}
                        </a>
                      </p>

                    </div>
                  </div>
                );
              })}
            </div>
            <div className="section-title-block mt-50">
              <div className="section-title-icon" />
              <div className="section-title-content">
                <div className="Page-title">
                  <Trans>Dashboards</Trans>
                </div>
                <div className="Page-description">
                  <Trans>Dashboards and analytics</Trans>
                </div>
              </div>
            </div>
            <div className="DashboardV2-projects">
              {PartnershipsAndIntegrationsData.map((item) => {
                return (
                  <div className="Ecosystem-card" key={item.name}>
                    <div className="Ecosystem-title-container">

                      <img src={dashboardItemLogo} />
                      <div>
                        <p className="Ecosystem-name">{item.name}</p>
                        <p className="Ecosystem-description">{description}</p>
                      </div>
                    </div>
                    <div className="Ecosystem-divider"></div>
                    <div className="Ecosystem-content">
                      <p>
                        Link: {' '}
                        <a href={"https://" + item.link}>
                          {item.link}
                        </a>
                      </p>
                      <div className="Ecosystem-content-divider">|</div>
                      <p>
                        Creator: {' '}
                        <a href={"https://" + item.creator}>
                          {item.creator}
                        </a>
                      </p>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SEO>
  );
}
