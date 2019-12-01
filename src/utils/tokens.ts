import Web3 from 'web3';

async function getERC20Balance(
  web3: Web3,
  contract: string,
  address: string,
) {
  const encodedCall = web3.eth.abi.encodeFunctionCall(
    {
      name: 'balanceOf',
      type: 'function',
      inputs: [{
        type: 'address',
        name: 'owner',
      }],
    },
    [address],
  );

  return web3.eth.call({
    to: contract,
    data: encodedCall,
  });
}

export {
  getERC20Balance,
};
