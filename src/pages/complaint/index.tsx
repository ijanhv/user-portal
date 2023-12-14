import ComplaintForm from "@/components/form/ComplaintForm";
import RegisterForm from "@/components/form/RegisterForm";
import PortalLayout from "@/components/layouts/PortalLayout";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ComplaintPage = () => {

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS
  );
  const { data, isLoading } = useContractRead(contract, 'getAllComplaints')

  console.log(data);
  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto mt-10 px-10 sm:px-1">
        <h1 className="text-3xl text-red-600 font-bold uppercase">
          Register a Complaint
        </h1>
        <div className="items-center text-sm p-3 rounded-md font-semibold mt-2 bg-yellow-200">
          ⓘ To file a complaint, please complete all the fields provided below
          accurately. Kindly ensure that you fill out the form correctly as the
          information you provide will be used for the subsequent processing of
          your grievance. शिकायत दर्ज करने के लिए, कृपया नीचे दिए गए सभी
          क्षेत्रों को सटीकता से भरें। कृपया सुनिश्चित करें कि आप फ़ॉर्म को सही
          ढंग से भरें, क्योंकि आपके द्वारा प्रदान की गई जानकारी आपकी शिकायत की
          आगामी प्रक्रिया के लिए उपयोग की जाएगी।
        </div>
        <ComplaintForm />
      </div>
    </PortalLayout>
  );
};

export default ComplaintPage;
