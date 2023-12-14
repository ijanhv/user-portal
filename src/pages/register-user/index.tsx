import RegisterForm from "@/components/form/RegisterForm";
import PortalLayout from "@/components/layouts/PortalLayout";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

import React, { useState } from "react";
import { checkIfUserExists } from "../api/user/[userId]";

const RegisterPage = () => {
  const { user, isLoaded } = useUser();
  console.log(user?.id);

  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto mt-10 px-10 md:px-5 lg:px-1">
        <h1 className="text-3xl text-slate-900 font-bold font-800 font-nunito uppercase">
          Complete your profile
        </h1>

        <div className="mt-10">
          <RegisterForm userId={user?.id as string} />
        </div>
      </div>
    </PortalLayout>
  );
};

export default RegisterPage;
