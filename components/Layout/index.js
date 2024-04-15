import Navigation from "../Navigation";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledHeading>Art Gallery App</StyledHeading>
      <main>{children}</main>
      <Navigation />
    </>
  );
}
