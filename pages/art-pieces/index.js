import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  checkIfArtPieceIsFavorite,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      pieces={data}
      onToggleFavorite={onToggleFavorite}
      checkIfArtPieceIsFavorite={checkIfArtPieceIsFavorite}
    />
  );
}
