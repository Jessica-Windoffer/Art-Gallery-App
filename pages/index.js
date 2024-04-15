import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";
import Spotlight from "@/components/Spotlight";

const StyledHeading = styled.h1`
  text-align: center;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const randomArtPiece = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
      <StyledHeading>Art Gallery App</StyledHeading>
      <ArtPieces pieces={data} />
    </div>
  );
}
