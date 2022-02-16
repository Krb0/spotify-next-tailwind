import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import spotifyApi from "../lib/spotify";
const useSpotify = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);
  return <div></div>;
};

export default useSpotify;
