import styled from "styled-components";
import ArtPiecesPreview from "../ArtPiecePreview";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px;
  margin: 0;
  padding: 0;
`;

export default function ArtPieces({
  pieces,
  checkIfArtPieceIsFavorite,
  onToggleFavorite,
}) {
  return (
    <StyledUl>
      {pieces.map((piece) => (
        <ArtPiecesPreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          isFavorite={checkIfArtPieceIsFavorite(piece.slug)}
          onToggleFavorite={() => onToggleFavorite(piece.slug)}
        />
      ))}
    </StyledUl>
  );
}
