//import "./FavoriteButton.css";
import Image from "next/image";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <button
      className="favorite-button"
      onClick={() => onToggleFavorite(slug)}
      aria-label="favorite"
    >
      {isFavorite ? (
        <Image
          src={"/assets/star-filled.svg"}
          alt="favIcon"
          width={50}
          height={50}
        />
      ) : (
        <Image src={"/assets/star.svg"} alt="favIcon" width={50} height={50} />
      )}
    </button>
  );
}
