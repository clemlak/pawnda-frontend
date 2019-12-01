import React, {
  useEffect,
  useContext,
} from 'react';
import Web3 from 'web3';

import {
  Web3Context,
} from './web3Wrapper';

import {
  getERC20Balance,
} from '../utils/tokens';

import App from '../components/app';

declare global {
  interface Window {
    ethereum: any,
    web3: any,
  }
}

const Web3Loader = () => {
  const state = useContext(Web3Context);

  const {
    dispatch,
    isReady,
    web3,
    address,
  } = state;

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        dispatch({
          target: 'web3',
          value: window.web3,
          type: 'set',
        });

        try {
          await window.ethereum.enable();

          dispatch({
            target: 'isReady',
            value: true,
            type: 'set',
          });
        } catch (err) {
          throw new Error(err);
        }
      } else if (window.web3) {
        window.web3 = new Web3(window.web3);

        dispatch({
          target: 'web3',
          value: window.web3,
          type: 'set',
        });

        dispatch({
          target: 'isReady',
          value: true,
          type: 'set',
        });
      }
    }

    init();
  }, [dispatch]);

  useEffect(() => {
    async function getAddress() {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        const newAddress = accounts[0];

        dispatch({
          target: 'address',
          value: newAddress,
          type: 'set',
        });

        if (window.ethereum) {
          window.ethereum.on('accountsChanged', (newAccounts: String[]) => {
            dispatch({
              type: 'set',
              target: 'address',
              value: newAccounts[0],
            });
          });
        }
      }
    }

    getAddress();
  }, [isReady]);

  useEffect(() => {
    async function getAccountData() {
      if (Web3.utils.isAddress(address)) {
        const networkId: number = await web3.eth.net.getId();

        dispatch({
          target: 'networkId',
          value: networkId,
          type: 'set',
        });

        const ethBalance = await web3.eth.getBalance(address);

        dispatch({
          target: 'ethBalance',
          value: parseFloat(web3.utils.fromWei(ethBalance.toString())),
          type: 'set',
        });

        const daiBalance = await getERC20Balance(
          web3,
          '0x1D329f63dbd2DfCa686a87c90D4Fe4b802F3E34D',
          address,
        );

        dispatch({
          target: 'daiBalance',
          value: parseFloat(web3.utils.fromWei(daiBalance.toString())),
          type: 'set',
        });

        const testnetDaiBalance = await getERC20Balance(
          web3,
          '0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8',
          address,
        );

        dispatch({
          target: 'testnetDaiBalance',
          value: parseFloat(web3.utils.fromWei(testnetDaiBalance.toString())),
          type: 'set',
        });
      }
    }

    getAccountData();
  }, [address]);

  return <App />;
};

export default Web3Loader;
