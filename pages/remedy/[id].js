import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import ModalDelete from "@/components/ModalDelete.js";

export default function RemedyDetailsPage({ remedies, handleDeleteRemedy }) {
  const router = useRouter();
  const { id } = router.query;

  const currentRemedy = remedies.find((remedy) => remedy.id === id);

  if (!currentRemedy) {
    return <p>...loading</p>;
  }
  function handleDelete() {
    typeof handleDeleteRemedy === "function"
      ? (handleDeleteRemedy(id), router.push("/"))
      : null;
  }

  return (
    <>
      <Image
        src={currentRemedy.imageUrl}
        alt={currentRemedy.title}
        width={250}
        height={250}
      />
      <h2>Information</h2>
      <h3>Ingredients:</h3>
      <ul>
        {currentRemedy.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Preparation:</h3>
      <p>{currentRemedy.preparation}</p>

      <h3>Usage:</h3>
      <p>{currentRemedy.usage}</p>

      <h3>Symptoms:</h3>
      <ul>
        {currentRemedy.symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
      <ModalDelete onDelete={handleDelete} />
      <Link href="/"> &larr; Back</Link>
    </>
  );
}
