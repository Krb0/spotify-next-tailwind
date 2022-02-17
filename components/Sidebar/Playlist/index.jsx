import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { playlistIdState } from "../../../atoms/playlistAtom";
import useSpotify from "../../../hooks/useSpotify";

const Playlist = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const setPlaylistId = useSetRecoilState(playlistIdState);
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(({ body: data }) => {
        setPlaylists(data.items);
      });
    }
  }, [session, spotifyApi]);
  return (
    <div>
      {playlists.map((playlist) => (
        <p
          className="cursor-pointer hover:text-white"
          key={playlist.id}
          onClick={() => setPlaylistId(playlist.id)}
        >
          {playlist.name}
        </p>
      ))}
    </div>
  );
};

export default Playlist;
