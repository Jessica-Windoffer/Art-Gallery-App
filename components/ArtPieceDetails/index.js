import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
  padding-bottom: 2rem;
  font-size: 1.2rem;
  color: black;
  &:link,
  &:visited {
    text-decoration: none;
  }
`;

const StyledLi = styled.li`
  list-style-type: none;
  padding: 0.4rem;
`;

const StyledUl = styled.ul`
  margin: 1rem 0 0 0;
  padding: 0.5rem;
`;

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  return (
    <StyledSection>
      <StyledLink href="/art-pieces">← Back</StyledLink>
      <Image src={image} alt={name} width={300} height={400} />
      <StyledUl>
        <StyledLi>Name: {name}</StyledLi>
        <StyledLi>Artist: {artist}</StyledLi>
        <StyledLi>Created in {year}</StyledLi>
        <StyledLi>Genre: {genre}</StyledLi>
      </StyledUl>
    </StyledSection>
  );
}
