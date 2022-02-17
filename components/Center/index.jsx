import { useEffect } from "react";
import { playlistIdState, playlistState } from "../../atoms/playlistAtom";
import { useRecoilValue, useRecoilState } from "recoil";
import useSpotify from "../../hooks/useSpotify";
import Header from "./Header";

const Center = () => {
  const playlistId = useRecoilValue(playlistIdState);
  const spotifyApi = useSpotify();
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => setPlaylist(data.body));
  }, [spotifyApi, playlistId, setPlaylist]);
  return (
    <div className="flex-grow text-white">
      <Header playlist={playlist} />
    </div>
  );
};

export default Center;
