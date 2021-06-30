// Required imports
const { ApiPromise, WsProvider, HttpProvider } = require('@polkadot/api');

const types = {
    "CurrencyId": {
        "_enum": [
            "Native",
            "DOT",
            "KSM",
            "BTC"
        ]
    },
    "CurrencyIdOf": "CurrencyId",
    "Amount": "i128",
    "AmountOf": "Amount",
    "Order": {
        "base_currency_id": "CurrencyId",
        "base_amount": "Compact<Balance>",
        "target_currency_id": "CurrencyId",
        "target_amount": "Compact<Balance>",
        "owner": "AccountId"
    },
    "OrderOf": "Order",
    "OrderId": "u32",

    "VestingScheduleOf": "u32",
    "ShardIdentifier": "u32",
    "ChainId": "u32",
    "DepositNonce": "u32",
    "ResourceId": "u32",
    "TokenId": "u32"
};

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');
 
  // This gives an ERROR ("HttpProvider is not a constructor");
  // const provider = new HttpProvider('http://18.157.186.158:9944');

  console.log("Provider Created!");

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider, types });

  console.log("ApiPromise Created!");

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

main().catch(console.error).finally(() => process.exit());
