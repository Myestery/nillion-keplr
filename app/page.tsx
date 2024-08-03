"use client";

import React, { FunctionComponent, useRef, useState } from "react";

import KeplrAddChainButton from "add-keplr-chain";
import Link from 'next/link';
import { StargateClient } from "@cosmjs/stargate";

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
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const connectButtonRef = useRef<HTMLButtonElement>(null);

  const getKeplrBalance = async () => {
    setIsLoading(true);
    try {
      if (!window.keplr) {
        throw new Error("Please install Keplr extension");
      }

      // Trigger click on connect button
      connectButtonRef.current?.click();

      // Wait for a moment to ensure the chain is added
      await new Promise(resolve => setTimeout(resolve, 1000));

      await window.keplr.enable(chainInfo.chainId);
      const offlineSigner = window.keplr.getOfflineSigner(chainInfo.chainId);
      const accounts = await offlineSigner.getAccounts();
      const address = accounts[0].address;

      const client = await StargateClient.connect(chainInfo.rpc);
      const balanceResponse = await client.getBalance(address, chainInfo.currencies[0].coinMinimalDenom);

      // Convert balance to NIL (assuming 6 decimal places)
      const balanceInNIL = Number(balanceResponse.amount) / 1000000;
      setBalance(`${balanceInNIL.toFixed(6)} NIL`);
    } catch (error) {
      console.error("Failed to get balance:", error);
      setBalance("Error fetching balance");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <KeplrAddChainButton
        chainInfo={chainInfo}
        buttonText='Connect to Nillion Testnet'
        loadingText='Connecting...'
        buttonClassName="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-4"
        ref={connectButtonRef}
      />
      <button
        onClick={getKeplrBalance}
        disabled={isLoading}
        className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 active:bg-green-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mb-4"
      >
        {isLoading ? 'Fetching Balance...' : 'Get Balance'}
      </button>
      {balance && (
        <div className="text-white text-xl font-semibold mt-4">
          Balance: {balance}
        </div>
      )}
      <Link href="/custom" className="mt-6 text-white text-lg font-semibold underline hover:text-blue-200 transition-colors duration-300">
        Go to Custom Page
      </Link>
    </div>
  );
};

export default Button;