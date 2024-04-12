import Image from "next/image";
import styled from "styled-components";

const StyledList = styled.li`
  list-style-type: none;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px;
  margin: 0;
  padding: 0;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledText = styled.p`
  margin-block-start: 5px;
  marign: 0;
  padding: 0;
`;

export default function ArtPieces({ pieces }) {
  return (
    <StyledUl>
      {pieces.map((piece) => (
        <StyledList key={piece.slug}>
          <StyledImage
            src={piece.imageSource}
            height={200}
            width={150}
            alt={piece.name}
          />
          <StyledText>{piece.artist}</StyledText>
        </StyledList>
      ))}
    </StyledUl>
  );
}
