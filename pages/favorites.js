import RemediesList from "@/components/RemediesList";
import Link from "next/link";

export default function FavoritePage({ handleToggleFavorite, remedies }) {
  const favoriteRemedies = remedies.filter((remedy) => remedy.isFavorite);

  return (
    <>
      <div>
        <h1>Your Favorite Remedies</h1>
        {favoriteRemedies.length > 0 ? (
          <RemediesList
            remedies={favoriteRemedies}
            handleToggleFavorite={handleToggleFavorite}
          />
        ) : (
          <p>You have no favorite remedies.</p>
        )}
      </div>

      <Link href="/">Go back to page</Link>
    </>
  );
}
