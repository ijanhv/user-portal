"use client";
import Link from "next/link";
import React, { useState } from "react";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const Options = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const user = session?.user?.name;
  const router = useRouter();
  const { user } = useUser();

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const address = useAddress();

  // if (session) console.log(session);

  const links = [
    {
      name: "About",
      link: "/portal",
    },
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Register Complaint",
      link: "/complaint",
    },
    {
      name: "View Status",
      link: "/status",
    },
    {
      name: "Contact Higher Authorities",
      link: "/contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6 lg:px-24">
      <div className="flex items-center  text-white mr-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
          Nivaran
        </h1>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isOpen ? "" : "hidden"
        } block justify-between flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.link}
              className="block mt-4 lg:inline-block  lg:mt-0 text-white  mr-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div>
          <div className="flex text-sm items-center gap-3 py-2 cursor-pointer rounded text-white  mt-4 lg:mt-0">
            {/* <UserButton afterSignOutUrl="/" />
     

          


            <UserCircleIcon className="h-10" /> */}
            {!userId && (
              <>
                <Link
                  href="sign-in"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="sign-up"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            )}
            {userId && (
              <Link
                href="profile"
                className="text-gray-300 hover:text-white mr-4"
              >
                {user?.fullName}
              </Link>
            )}
            <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>

            <ConnectWallet />

            {/* {session ? <div>{user}</div> : <Link href="/login">Login</Link>}

            {session ? (
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Options;
