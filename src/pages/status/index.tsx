import FIRDetails from "@/components/fir/FIRDetails";
import PortalLayout from "@/components/layouts/PortalLayout";
import { useContract, useContractRead, useNFT } from "@thirdweb-dev/react";
import React, { useState } from "react";

const ViewStatus = () => {
  const [id, setId] = useState<any>(0);
  // const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS);
  // const { data: Complaints } = useContractRead(
  //   contract,
  //   "Complaints",
  //   id as any
  // );

  const { contract: firContract } = useContract(
    process.env.NEXT_PUBLIC_FIR_CONTRACT
  );

  // const { data: firData, isLoading: isFIRDataLoading } = useNFT(firContract, id as string);

  const [nft, setNft] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const getNFT = async () => {
    setIsLoading(true);
    const nft = await firContract?.erc721.get(id as string);
    console.log("NFT", nft);
    setNft(nft);
    setIsLoading(false);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      getNFT();
    }
  };

  return (
    <PortalLayout>
      <div className="bg-gray-100 rounded-md items-center justify-center m-10 p-10 shadow-md">
        <div className="status">
          <p className="text-center text-3xl font-bold my-3">
            Check Status of Your FIR
          </p>
          <div className="flex items-center justify-center">
            <p className="mr-1">FIR ID:</p>
            <input
              type="number"
              className="input-field md:w-[300px]"
              placeholder="Enter FIR ID"
              onChange={(e) => {
                if (e.target.value) {
                  setId(e.target.value);
                }
              }}
              onKeyDown={handleKeyDown}
            />
          </div>

          {!isLoading && nft.metadata !== undefined && (
            <FIRDetails
              fir={nft.metadata as any}
              selectedStatus={nft?.metadata?.properties?.status as string}
            />
          )}
        </div>
      </div>
    </PortalLayout>
  );
};

export default ViewStatus;
