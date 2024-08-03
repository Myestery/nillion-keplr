"use client";

import React, { FunctionComponent } from "react";

import KeplrAddChainButton from "add-keplr-chain";
import Link from 'next/link';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <KeplrAddChainButton
        chainInfo={chainInfo}
        buttonText='Add Nillion Testnet'
        loadingText='Adding Chain...'
        renderButton={({ onClick, disabled, isLoading, text }) => (
          <button
            onClick={onClick}
            disabled={disabled}
            className={`
              px-6 py-3 text-lg font-semibold text-white rounded-full
              ${isLoading 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}
              transition-all duration-300 ease-in-out
              transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
              flex items-center justify-center
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
            `}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {text}
              </>
            ) : (
              <>
                <img 
                  src="https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png" 
                  alt="Nillion Logo" 
                  className="w-6 h-6 mr-2"
                />
                {text}
              </>
            )}
          </button>
        )}
      />
      <Link href="/" className="mt-8 text-white underline hover:text-blue-200 transition-colors duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default Button;