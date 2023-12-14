import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { ClerkProvider } from "@clerk/nextjs";
import { ThirdwebProvider } from "@thirdweb-dev/react";


const activeChain = "mumbai";

export default function App({
  Component,
  pageProps: {  ...pageProps },
}: AppProps<{  }>) {

  return (
    
    <ClerkProvider {...pageProps}>

      <ThirdwebProvider activeChain={activeChain}
        clientId='eeddff0276fdcd3b30b5b4361081c016'
        {...pageProps}
      >
      {/* <SessionProvider session={session}> */}
        <Component {...pageProps} />
      {/* </SessionProvider> */}
      </ThirdwebProvider>
    </ClerkProvider>
  );
}
