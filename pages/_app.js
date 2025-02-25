import GlobalStyle from "../styles";
import initialRemedies from "../assets/remedies.json";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [remedies, setRemedies] = useState(initialRemedies);
  // comments

  function handleAddRemedy(newRemedy) {
    setRemedies([
      {
        id: uid(),
        ...newRemedy,
      },
      ...remedies,
    ]);
  }
  function handleDeleteRemedy(id) {
    setRemedies(remedies.filter((remedy) => remedy.id !== id));
  }

  function handleEditRemedy(id, updatedRemedy) {
    setRemedies(
      remedies.map((remedy) =>
        remedy.id === id ? { ...remedy, ...updatedRemedy } : remedy
      )
    );
  }

  function handleToggleFavorite(id) {
    const updatedRemedies = remedies.map((remedy) =>
      remedy.id === id ? { ...remedy, isFavorite: !remedy.isFavorite } : remedy
    );

    setRemedies(updatedRemedies);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        remedies={remedies}
        handleAddRemedy={handleAddRemedy}
        handleDeleteRemedy={handleDeleteRemedy}
        handleEditRemedy={handleEditRemedy}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
