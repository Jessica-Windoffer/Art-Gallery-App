import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image src={image} height={200} width={150} alt="Here the art Piece" />
      <p>{artist}</p>
    </>
  );
}
