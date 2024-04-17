import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

const StyledList = styled.li`
  list-style-type: none;
  max-width: 150px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledText = styled.p`
  margin-block-start: 5px;
  margin: 0;
  padding: 0;
`;

export default function ArtPiecesPreview({
  slug,
  image,
  title,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <StyledList key={title}>
        <Link href={`/art-pieces/${slug}`}>
          <StyledImage src={image} height={200} width={150} alt={title} />
        </Link>
        <StyledText>Title: {title}</StyledText>
        <StyledText>Artist: {artist}</StyledText>
      </StyledList>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
