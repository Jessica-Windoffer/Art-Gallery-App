import Spotlight from "@/components/Spotlight";

export default function SpotLightPage({ data, isFavorite, onToggleFavorite }) {
  const randomArtPiece = data[Math.floor(Math.random() * data.length)];

  console.log(data);

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        isFavorite={isFavorite}
        slug={randomArtPiece.slug}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
