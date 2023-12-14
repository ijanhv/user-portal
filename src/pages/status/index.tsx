import PortalLayout from "@/components/layouts/PortalLayout";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useState } from "react";

const ViewStatus = () => {
  const [id, setId] = useState<any>(0);
  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS);
  const { data: Complaints } = useContractRead(
    contract,
    "Complaints",
    id as any
  );


  return (
    <PortalLayout>
      <div className="bg-gray-100 rounded-md items-center justify-center m-10 p-10 shadow-md">
        <div className="status">
          <p className="text-center text-3xl font-bold my-3">Check Status of Your Complaint</p>
          <div className="flex items-center justify-center">
            <p className="mr-1">Complaint ID:</p>
            <input
              type="number"
              className="input-field md:w-[300px]"
              placeholder="Enter Complaint ID"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
        </div>
        {Complaints && Complaints.title && (
          <div className="justify-center text-center mx-auto md:w-[600px] pt-5">
            <p className="text-xl font-bold">Complaint Details</p>
            <p className="status-render-text">
              Complaint Id: {Complaints.id.toString()}
            </p>
            <p className="status-render-text">
              Complaint by: {Complaints.complaintRegisteredBy.toString()}
            </p>

            <p className="status-render-text">
              Complaint Title: {Complaints.title}
            </p>
            <p className="status-render-text">
              Complaint Description: {Complaints.description}
            </p>
            <p className="status-render-text">
              Email: {Complaints.email}
            </p>
            <p className="status-render-text">
              Name: {Complaints.name}
            </p>
            <p className="status-render-text">
              Location: {Complaints.location}
            </p>
            <p className="status-render-text">
              Phone Number: {Complaints.mobileNumber}
            </p>

            <p className="status-render-text">
              Approval Status:{" "}
              {Complaints.isApproved
                ? "Approved"
                : !Complaints.exists
                ? "Declined"
                : "Approval Pending"}
            </p>
            <p className="status-render-text">
              Approval Remark: {Complaints.approvalRemark}
            </p>
            <p className="status-render-text">
              Resolution Status:{" "}
              {Complaints.isResolved ? "Resolved" : "Resolution pending"}
            </p>
            <p className="status-render-text mb-2">
              Resolution Remark: {Complaints.resolutionRemark}
            </p>
          </div>
        )}
      </div>
    </PortalLayout>
  );
};

export default ViewStatus;
