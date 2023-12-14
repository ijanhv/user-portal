import LoginForm from "@/components/form/LoginForm";
import RegisterForm from "@/components/form/RegisterForm";
import PortalLayout from "@/components/layouts/PortalLayout";
import React from "react";

const Login = () => {
  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto mt-10 px-10 md:px-5 lg:px-1">
        <h1 className="text-3xl text-slate-900 font-bold font-800 font-nunito uppercase">
          Login
        </h1>

        
        <LoginForm />
      </div>
    </PortalLayout>
  );
};

export default Login;
