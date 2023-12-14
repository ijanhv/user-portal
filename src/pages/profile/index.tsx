import PortalLayout from "@/components/layouts/PortalLayout";
import { UserProfile, useUser } from "@clerk/clerk-react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";

const ProfilePage = () => {
  const { contract } = useContract(
    "0x3f5469688063763A62d4962D0d12711131265795"
  );
  const address = useAddress();
  const { user, isLoaded } = useUser();


  if (!isLoaded)
    return (
      <PortalLayout>
        <div className="bg-gray-100 flex items-center justify-center h-full">
          Loading...
        </div>
      </PortalLayout>
    );

  if (isLoaded) {
    return (
      <PortalLayout>
        <div className="bg-gray-100 flex items-center justify-center min-h-screen pb-10">
          <UserProfile />
        </div>
      </PortalLayout>
    );
  }
};

export default ProfilePage;
