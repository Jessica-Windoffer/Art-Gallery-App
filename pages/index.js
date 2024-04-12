import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  console.log({ data });

  return (
    <div>
      <StyledHeading>Art Gallery App</StyledHeading>
      <ArtPieces pieces={data} />
    </div>
  );
}

// Acceptance Criteria
// All art pieces are displayed as a list
// Each art piece's image is displayed
// Each art piece's title is displayed
// Each art piece's artist is displayed

// Tasks
// [x] Fetch all art pieces with SWR in pages/index.js
// [x] Create the component ArtPieces to render a list
// [x] ArtPieces props: pieces
// [x] Create the component ArtPiecePreview
// [x] ArtPiecePreview props: image, title, artist
