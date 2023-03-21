async function main() {
  // Contract 0x53182F689C5E548cB28172ccd86d2576d3406875
  // MATIC Contract 0x801B1ec0e3be57Ab132B33CB8be07137734A9C20
  const MyToken = await hre.ethers.getContractFactory("en_bici_nft");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(
    await signer0.getAddress(),
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
