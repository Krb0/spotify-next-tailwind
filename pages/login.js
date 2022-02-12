import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SpotifyLogo from "../assets/Spotify-logo.png";
const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center gap-10 bg-[#242424] ">
      <div className="relative w-[200px] h-[120px] sm:w-[400px] sm:h-[240px] ">
        <Image src={SpotifyLogo} alt="Spotify Logo" layout="fill" />
      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="font-semibold bg-primary text-white p-5 rounded-lg "
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
