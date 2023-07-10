import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "YourNftToken",
  tokenName: "YourNftToken",
  tokenSymbol: "HANZO",
  hiddenMetadataUri: "ipfs://__CID__/hidden.json",
  maxSupply: 5000,
  whitelistSale: {
    price: 0.04,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 100,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.06,
    maxMintAmountPerTx: 50,
  },
  contractAddress: null,
  walletConnectProjectId: null,
  marketplaceIdentifier: "",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  royaltyReceiver: null,
  royaltyNumerator: null,
  whitelistLimit: 0,
  treasury: null,
};

export default CollectionConfig;
