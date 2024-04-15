import Spotlight from "@/components/Spotlight";

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
