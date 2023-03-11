async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "En Bici",
      attributes: [
        {
          trait_type: "Sports",
          value: "90",
        },
        {
          trait_type: "Bike",
          value: "100",
        },
        {
          trait_type: "Cycling",
          value: "100",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        // "https://ipfs.io/ipfs/QmUg9Nq1J5uzsTdfzuHrKev6h4jxhqCWbXssjZHosh7Krx?filename=logo%20en-bici%20nft.png",
        "https://ipfs.io/ipfs/QmcPH7iexeMtC8i8VxtmcsyUaysK69E81vRsjN8uap32hv?filename=en-bici-nft-low.mp4",
      description: "NFT perteneciente al canal de youtube en-bici",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
