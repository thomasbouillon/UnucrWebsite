import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">
        Divers et téléchargements
      </h2>

      <Image
        src="/jusquau-bout-la-revue/revue1.png"
        alt="Couverture de la revue Jusqu'au bout"
        width={222}
        height={313}
      />

      <div className="space-y-8 my-8">
        <p>
          <Link className="inline-link" href="#">
            Les archives du JAB.
          </Link>{" "}
          Retrouvez une sélection d&apos;articles déjà publiés.
        </p>
        <Link className="link" href="#">
          Envoyer un article ou contacter la rédaction
        </Link>
      </div>

      <Image
        src="/jusquau-bout-la-revue/revue2.jpeg"
        alt="Plusieurs couvertures de la revue Jusqu'au bout"
        width={430}
        height={608}
      />
    </div>
  );
}
