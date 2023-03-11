const enbiciadd = "0x921D7bBD5aaabB067F7F125DcE274fCf9aD040b6";
// Polygon mainnet
// const enbiciadd = "0x50f38a24a2ecbE70b40abB03554FF9Ab75a1B099";

const { ethers } = require("hardhat");
require("dotenv").config();

// const abi = require("../abi.json");
// const abi = [
//   "function name() public view returns (string)",
//   "function symbol() public view returns (string)",
//   "function decimals() public view returns (uint8)",
//   "function totalSupply() public view returns (uint256)",
//   "function balanceOf(address) public view returns (uint256)",
//   "function approve(address _spender, uint256 _value) public returns (bool success)",
// ];

const abi = ["function safeMint(address to, string memory uri) public"];

async function main() {
  // Second parameter is chainId, 1 for Ethereum mainnet
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.MUMBAI_RPC_URL,
    80001
  );
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const enbiciContract = new ethers.Contract(enbiciadd, abi, signer);

  // await enbiciContract.safeMint(
  //   await signer.getAddress(),
  //   "ipfs://QmYP268VPbG31UHvQw3H6TSf5WTy4N8htwcDRBrgBGchGg"
  // );

  // update the IPFS CID to be your image CID
  // const metadata = `{
  //   "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
  //   "external_url": "https://openseacreatures.io/3",
  //   "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
  //   "name": "Dave Starbelly",
  // }`;
  // console.log(metadata);
  // process.exit(0);

  await enbiciContract.safeMint(
    await signer.getAddress(),
    "ipfs://QmdH3RbdXEF3vHfPYwvFoaizZCfobmgzQ2BG8xs1qWQ9pq"
  );

  console.log("NFT Minted!");

  // console.log(
  //   `${symbol} (${name}) total supply is ${ethers.utils.formatUnits(
  //     totalSupply,
  //     decimals
  //   )}`
  // );
  // console.log(`Mi wallet has ${ethers.utils.formatUnits(balance, decimals)}`);

  // const estimatedGasLimit = await USDTContract.estimateGas.approve("SOME_ADDRESS", "1000000"); // approves 1 USDT
  // const approveTxUnsigned = await USDTContract.populateTransaction.approve("SOME_ADDRESS", "1000000");
  // approveTxUnsigned.chainId = 1; // chainId 1 for Ethereum mainnet
  // approveTxUnsigned.gasLimit = estimatedGasLimit;
  // approveTxUnsigned.gasPrice = await provider.getGasPrice();
  // approveTxUnsigned.nonce = await provider.getTransactionCount(walletAddress);

  // const approveTxSigned = await signer.signTransaction(approveTxUnsigned);
  // const submittedTx = await provider.sendTransaction(approveTxSigned);
  // const approveReceipt = await submittedTx.wait();
  // if (approveReceipt.status === 0)
  //     throw new Error("Approve transaction failed");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
