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
  contractName: "HanzoAvatars",
  tokenName: "HanzoAvatars",
  tokenSymbol: "HANZO",
  hiddenMetadataUri: "ipfs://bafybeigogldcdwnyjv2pgyqikatpb3n4gl7z4twwuw6cssn5wqmu4z3gei/hidden.json",
  maxSupply: 5000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
    whitelistSupply: 1500
  },
  preSale: {
    price: 100,
    maxMintAmountPerTx: 0,
  },
  publicSale: {
    price: 0.06,
    maxMintAmountPerTx: 50,
  },
  contractAddress: "0x21ac284D439183F3Aa5b9C471998E08704dd4Fac",
  walletConnectProjectId: "54b86bafe334a726226e97077e25c877",
  marketplaceIdentifier: "hanzo-avatars",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  royaltyReceiver: "0xC5EBdd487fF97ce2698b69cc09EF0BEfdE476944",
  royaltyNumerator: "1000",
  treasury: "0xC5EBdd487fF97ce2698b69cc09EF0BEfdE476944",
};

export default CollectionConfig;
