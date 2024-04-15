import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 1rem;
  background-color: lightblue;
`;

const StyledUl = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

const StyledLi = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink href="/">Spotlight</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/">Favourites</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
