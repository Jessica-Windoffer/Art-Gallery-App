import styled from "styled-components";
import Image from "next/image";

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

export default function ArtPiecesPreview({ key, image, title, artist }) {
  return (
    <StyledList key={key}>
      <StyledImage src={image} height={200} width={150} alt={title} />
      <StyledText>Title: {title}</StyledText>
      <StyledText>Artist: {artist}</StyledText>
    </StyledList>
  );
}
