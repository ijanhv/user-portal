import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractEvents,
  useContractRead,
  useNFT,
  useUser,
} from "@thirdweb-dev/react";
import Link from "next/link";

const RegisterPage = () => {


  const { contract } = useContract(
    "0x6B70B859d44cf2E545077bEAa870AE877D42FC40"
  );
  // You can get a specific event
  const { data: event, isLoading } = useContractEvents(contract, "MetadataUpdate");
  console.log("event", event);
  // All events
  const { data: allEvents } = useContractEvents(contract);

  const { data: eventWithoutListener } = useContractEvents(
    contract,
    undefined,
    { subscribe: false }
  );

  const { data, isLoading: tokenLoading } = useContractRead(contract, "tokenURI", [0])

  const { data: tokenData, isLoading: tokenDataLoading } = useContractRead(contract, "_setTokenURI", [0])
  if (tokenLoading) {
  }
  
  const { data: tokenByIndex, isLoading:  tokenByIndexLoading } = useContractRead(contract, "tokenByIndex", [1])
  console.log("tokenByIndex", tokenByIndex);
  const {
    data: nft,
    isLoading: nftLoading,
    error,
  } = useNFT(
    contract,
    2,

  );

  return (
    <div>
      <h1 className="text-4xl text-white font-semibold">Nivaran</h1>

      
      {/* {!isLoading &&
        event?.map((item, index) => {
          // Extract the hash and path from the uri in the event data
          const hashAndPath = item.data.uri.slice('ipfs://'.length);
          // Construct the new URL using 'https://ipfs.io/ipfs/' and the extracted hash and path
          const convertedUrl = `https://ipfs.io/ipfs/${hashAndPath}`;

          return (
            <div key={index}>
              <Link href={convertedUrl}>{convertedUrl}</Link>
            </div>
          );
        })} */}
    </div>
  );
};

export default RegisterPage;
