import React from "react";
import { getProviders, signIn, useSession } from "next-auth/react";

import Image from "next/image";
import SpotifyLogo from "../assets/Spotify-logo.png";
import Head from "next/head";
const Login = ({ providers }) => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center gap-10 bg-[#242424] ">
      <Head>
        <title>Spotify | Login </title>
        <meta name="description" content="A Spotify clone made with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-[200px] h-[120px] sm:w-[400px] sm:h-[240px] ">
        <Image
          src={SpotifyLogo}
          alt="Spotify Logo"
          layout="fill"
          priority={true}
        />
      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="font-semibold bg-primary text-[#242424] p-5 rounded-lg "
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
