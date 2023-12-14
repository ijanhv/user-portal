import { apiUrl } from "@/lib/apiUrl";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logged in successfully");
        router.push("/portal");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <form
      className="md:w-1/2 w-full justify-center pt-7 font-raleway"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-6 ">
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
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
