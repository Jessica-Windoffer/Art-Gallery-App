//mport useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import Navigation from "@/components/Navigation";

export default function SpotLightPage({ data }) {
  const randomArtPiece = data[Math.floor(Math.random() * data.length)];

  console.log(data);

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
    </div>
  );
}
