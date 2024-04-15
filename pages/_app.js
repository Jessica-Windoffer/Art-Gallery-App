import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    setIsFavorite(
      data.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  }
  console.log("Favorite:", isFavorite);

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
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
