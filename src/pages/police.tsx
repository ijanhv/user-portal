import React from 'react'
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import Image from 'next/image';

const OfficerPage = () => {
    const { contract } = useContract("0xa2f0cFB8bE39BbF1e7387f2721041AB93f19FeD6");
    const { data, isLoading, error } = useOwnedNFTs(contract, "0xF6A3f986Fb3220189D9b77591a5a212c727DB37f");

    if(isLoading) {
        return <div>Loading...</div>
    }

    console.log("data", data);

  return (
    <div>
      <h1 className="text-4xl text-white font-semibold">Nivaran</h1>
      <div>
        {data?.map((item, index) => {
       
          return (
            <div key={index} className='my-10'>
              <div>{item.metadata.name}</div>
              {/* <Image
                src={item.metadata.image as string}
                width={200}
                height={200}
                alt={item.metadata.name as string}
              /> */}
              <p className="text-black">{item.metadata.description}</p>
              {/* <p className="text-black">{item.metadata?.attributes[0].value as string}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default OfficerPage