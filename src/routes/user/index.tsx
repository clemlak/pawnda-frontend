import React, {
  useContext,
} from 'react';

import {
  Web3Context,
} from '../../store/web3Wrapper';

import {
  Title,
  Text,
} from '../../style/components';

function User() {
  const state = useContext(Web3Context);

  const {
    address,
    ethBalance,
    daiBalance,
    testnetDaiBalance,
  } = state;

  return (
    <>
      <Title>
        Hello!
      </Title>
      <Text>
        Apparently we had reached a great height in the atmosphere,
      </Text>
      <ul>
        <li>
          {`Address ${address}`}
        </li>
        <li>
          {`ETH Balance ${ethBalance}`}
        </li>
        <li>
          {`DAI Balance ${daiBalance}`}
        </li>
        <li>
          {`TestnetDai Balance ${testnetDaiBalance}`}
        </li>
      </ul>
    </>
  );
}

export default User;
