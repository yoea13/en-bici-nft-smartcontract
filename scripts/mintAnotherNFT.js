// Mumbai
const enbiciadd = "0x921D7bBD5aaabB067F7F125DcE274fCf9aD040b6";
// Polygon mainnet video
// const enbiciadd = "0x50f38a24a2ecbE70b40abB03554FF9Ab75a1B099";
// Polygon mainnet png
// const enbiciadd = "0x85221e2faEf50f58d79CcAeD0e11989DCb502cDE";

const { ethers } = require("hardhat");
require("dotenv").config();

const abi = ["function safeMint(address to, string memory uri) public"];

async function main() {
  // Second parameter is chainId, 1 for Ethereum mainnet
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.MUMBAI_RPC_URL,
    80001
  );
  // const provider = new ethers.providers.JsonRpcProvider(
  //   process.env.MATIC_RPC_URL,
  //   137
  // );

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const enbiciContract = new ethers.Contract(enbiciadd, abi, signer, {
    gas: "2000000000",
  });

  // ---- en-bici-video ----
  // await enbiciContract.safeMint(
  //   await signer.getAddress(),
  //   "ipfs://QmdH3RbdXEF3vHfPYwvFoaizZCfobmgzQ2BG8xs1qWQ9pq"
  // );

  //---- en-bici-imagen ----
  // await enbiciContract.safeMint(
  //   await signer.getAddress(),
  //   "ipfs://Qmet3yADzuJq1boqi6Tb4TaFs21ehxUZyKziRL6Sj8KxF9"
  // );

  await enbiciContract.safeMint(
    await signer.getAddress(),
    "ipfs://Qmet3yADzuJq1boqi6Tb4TaFs21ehxUZyKziRL6Sj8KxF9"
  );

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
