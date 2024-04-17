import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const [favoriteArtPieceSlugs, setFavoriteArtPieceSlugs] = useState([]);
  function checkIfArtPieceIsFavorite(slug) {
    const isFavorite = favoriteArtPieceSlugs.includes(slug);
    return isFavorite;
  }

  function addArtPieceToFavorites(slug) {
    setFavoriteArtPieceSlugs([...favoriteArtPieceSlugs, slug]);
  }

  function removeArtPieceFromFavorites(slug) {
    setFavoriteArtPieceSlugs(
      favoriteArtPieceSlugs.filter((favoriteSlug) => favoriteSlug !== slug)
    );
  }

  function handleToggleFavorite(slug) {
    const isFavorite = checkIfArtPieceIsFavorite(slug);
    if (isFavorite) {
      removeArtPieceFromFavorites(slug);
    } else {
      addArtPieceToFavorites(slug);
    }
  }

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(favoriteArtPieceSlugs);
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Layout>
          <Component
            {...pageProps}
            data={data}
            onToggleFavorite={handleToggleFavorite}
            checkIfArtPieceIsFavorite={checkIfArtPieceIsFavorite}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
