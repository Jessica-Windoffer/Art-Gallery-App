import ArtPieceDetails from "@/components/ArtPieceDetails";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router.js";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = data.find((piece) => piece.slug === slug);

  if (!piece) {
    return null;
  }
  console.log("Slug Page", piece);
  const { imageSource, name, artist, year, genre } = piece;

  return (
    <ArtPieceDetails
      image={imageSource}
      name={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
