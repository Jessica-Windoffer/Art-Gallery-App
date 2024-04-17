import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Spotlight({
  slug,
  image,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <StyledSection>
      <Image src={image} height={400} width={300} alt="Here the art Piece" />
      <h2>Artist: {artist}</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
    </StyledSection>
  );
}
