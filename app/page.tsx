"use client";

import React, { FunctionComponent } from "react";

import KeplrAddChainButton from "add-keplr-chain";
import Link from "next/link";

const chainInfo = {
  chainId: "nillion-chain-testnet-1",
  chainName: "Nillion Testnet",
  rpc: "https://testnet-nillion-rpc.lavenderfive.com",
  rest: "https://testnet-nillion-api.lavenderfive.com",
  chainSymbolImageUrl:
    "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "nillion",
    bech32PrefixAccPub: "nillionpub",
    bech32PrefixValAddr: "nillionvaloper",
    bech32PrefixValPub: "nillionvaloperpub",
    bech32PrefixConsAddr: "nillionvalcons",
    bech32PrefixConsPub: "nillionvalconspub",
  },
  currencies: [
    {
      coinDenom: "NIL",
      coinMinimalDenom: "unil",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "NIL",
      coinMinimalDenom: "unil",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
      gasPriceStep: {
        low: 0.001,
        average: 0.001,
        high: 0.01,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: "NIL",
    coinMinimalDenom: "unil",
    coinDecimals: 6,
    coinImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
  },
  features: [],
};

const Button: FunctionComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <KeplrAddChainButton
        chainInfo={chainInfo}
        buttonText='Add Nillion Testnet'
        loadingText='Adding Chain...'
        buttonClassName='px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
      />
      <Link
        href='/custom'
        className='mt-6 text-white text-lg font-semibold underline hover:text-blue-200 transition-colors duration-300'>
        Go to Custom Page
      </Link>
    </div>
  );
};

export default Button;
