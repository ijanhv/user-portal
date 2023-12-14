// import { apiUrl } from "@/lib/apiUrl";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface RegisterFormProps {
  userId: string;
}

const RegisterForm = ({ userId }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();


  const { user } = useUser();
  console.log(user);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    axios
      .post(`/api/user`, {
        ...data,
        userId,
        walletAddress: user?.primaryWeb3Wallet?.web3Wallet,
      })
      .then(() => {
        toast.success("Successfuly Registered!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <form
      className="w-full pt-7 font-raleway"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Name*
          </label>
          <input
            type="text"
            className="input-field"
            {...register("name")}
            required
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Email */}
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
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Password */}

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password*
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="input-field"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-900"
          >
            Address*
          </label>
          <input
            {...register("address")}
            type="text"
            id="address"
            className="input-field"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Wallet Address */}
        <div>
          <label
            htmlFor="wallet-address"
            className="block text-sm font-medium text-gray-900"
          >
            Wallet Address
          </label>
          <input
            {...register("walletAddress")}
            type="text"
            defaultValue={user?.primaryWeb3Wallet?.web3Wallet}
            id="wallet-address"
            className="input-field"
          />
          {errors.walletAddress && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-900"
          >
            Age
          </label>
          <input
            {...register("age", { min: 18, max: 99 })}
            type="number"
            id="age"
            className="input-field"
          />
          {errors.age && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-900"
          >
            Date of Birth
          </label>
          <div className="mt-1 relative">
            <input
              {...register("dateOfBirth")}
              type="date"
              id="dob"
              className="block w-full input-field"
            />
            {errors.dateOfBirth && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-900"
          >
            Mobile Number*
          </label>
          <input
            {...register("phoneNumber")}
            type="tel"
            id="mobile"
            className="input-field"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
      </div>

      <div className="flex items-start mt-4">
        <input
          type="checkbox"
          className="h-4 w-4 cursor-pointer items-start text-indigo-600 border-gray-300 rounded"
          required
        />
        <label
          htmlFor="terms-and-conditions"
          className="ml-3 block text-sm font-medium text-gray-900"
        >
          I agree to the{" "}
          <span className="text-indigo-600 hover:text-indigo-500">
            Terms and Conditions
          </span>{" "}
          & herefy declare that the information provided above is true to the
          best of my knowledge and belief.
        </label>
      </div>

      <div className="mt-10 md:flex-row justify-center items-center space-x-5">
        <button type="submit" className="w-56 submit-btn">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
