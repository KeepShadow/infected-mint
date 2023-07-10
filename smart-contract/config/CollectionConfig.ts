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
    whitelistSupply: 500
  },
  preSale: {
    price: 100,
    maxMintAmountPerTx: 0,
  },
  publicSale: {
    price: 0.06,
    maxMintAmountPerTx: 50,
  },
  contractAddress: "0x7759E5A866eF023a2CB4A479CCd1D0C10a75D393",
  walletConnectProjectId: "54b86bafe334a726226e97077e25c877",
  marketplaceIdentifier: "my-token-nft-test",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  royaltyReceiver: "0xC5EBdd487fF97ce2698b69cc09EF0BEfdE476944",
  royaltyNumerator: "1000",
};

export default CollectionConfig;
