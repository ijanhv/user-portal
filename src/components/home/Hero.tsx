
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative isolate px-6 lg:px-8 h-screen font-nunito">
      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl justify-center "
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] -translate-x-1/2 bg-gradient-to-tr from-[#001e63] to-[#001e63] opacity-30 sm:left-[calc(50%-30rem)] "></div>
      </div>
      <div className="mx-auto max-w-6xl py-48 ">
        <div className="mb-8 flex justify-center">
          <div className="relative  rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true"></span>
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        
        <div className="text-center ">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl font-nunito">
          Revolutionize FIR Reporting with Blockchain Technology 🚀 </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 font-nunito">
            Our innovative platform leverages the power of blockchain technology
            to transform the way FIRs are created, managed, and accessed,
            bringing about a new era of efficiency and reliability in reporting
            incidents of all kinds. 🌐🔐
            </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link

              href="#"
              className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7ea1f0] to-[#97b3f5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
};

export default Hero;
