// Import the API
const { ApiPromise } = require('@polkadot/api');

async function main () {
  // Create a new instance of the api
  const api = await ApiPromise.create();
  // get the chain information
  const chainInfo = await api.registry.getChainProperties()

  console.log(chainInfo);
  // for Polkadot this would print
  // {ss58Format: 0, tokenDecimals: [10], tokenSymbol: [DOT]}
}

main().catch(console.error).finally(() => process.exit());;
