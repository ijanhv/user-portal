import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from 'uuid';


type FormValues = {
  name: string;
  email: string;
  mobile: string;
  location: string;
  grievanceTitle: string;
  grievanceDescription: string;
}

const ComplaintForm = () => {
  const address = useAddress();
  const { user } = useUser();

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS
  );
  // @ts-ignore
  const { data: nextId } = useContractRead(contract, "nextId");
  const { mutateAsync: fileComplaint } = useContractWrite(
    contract,
      // @ts-ignore
    "fileComplaint"
  );
  function generateRandomId() {
    return uuidv4(); // Generate a random UUID (Universally Unique Identifier)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [grievanceTitle, setGrievanceTitle] = useState("");
  const [grievanceDescription, setGrievanceDescription] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    const complaintId = generateRandomId();

    const notification = toast.loading("Filing Complaint");
    console.log(data);
    try {
      const complaintData = await fileComplaint({
        args: [data.name, data.email, data.mobile, data.location, complaintId, data.grievanceTitle, data.grievanceDescription],
      });
      toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
        id: notification,
      });
      console.info("contract call successs", complaintData);
      setGrievanceTitle("");
      setGrievanceDescription("");
    } catch (err) {
      toast.error("Whoops, something went wrong!", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  })

  return (
    <form
    onSubmit={onSubmit}
    className=" grid gap-6 md:grid-cols-2 w-full pt-7 mb-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Name*
          </label>
          <input
          // defaultValue={user?.fullName || ''}
            type="text"
            id="name"
            className="input-field"
            {...register("name", {required: true})}
          />
        {errors.name && (<span className="text-red-500">This field is required</span>)}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            {...register("email", {required: true})}
          />
          </div>

        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-900"
          >
            Mobile Number*
          </label>
          <input
            // defaultValue={user?.phoneNumbers[0].phoneNumber}
            type="tel"
            id="mobile"
            className="input-field"
            {...register("mobile", {required: true})}
          />
        </div>

        <div>
          <label
            htmlFor="address1"
            className="block text-sm font-medium text-gray-900"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="input-field"
            {...register("location", {required: true})}
          />
        </div>

        {/* Grievance Title */}
        <div>
          <label
            htmlFor="grievance-title"
            className="block text-sm font-medium text-gray-900"
          >
            Grievance Title*
          </label>
          <select
            {...register("grievanceTitle", {required: true})}
            id="grievance-title"
            className="input-field"
          >
            <option value="Theft">Theft / चोरी</option>
            <option value="Violence">Violence / हिंसा</option>
            <option value="Cyber Crime">Cyber Crime / साइबर क्राइम</option>
            <option value="Drug">Drug / नशीली पदार्थ</option>
          </select>
        </div>

        {/* Grievance Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="grievance-description"
            className="block text-sm font-medium text-gray-900"
          >
            Grievance Description*
          </label>
          <textarea
            {...register("grievanceDescription", {required: true})}
            id="grievance-description"
            className="input-field"
          ></textarea>
      
      </div>

      <div className="mt-5 flex-row items-center space-x-5">
        <button type='submit' className="submit-btn">
          Submit
        </button>
        <button className="text-sm font-semibold leading-6 text-gray-900 md:order-2">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ComplaintForm;
