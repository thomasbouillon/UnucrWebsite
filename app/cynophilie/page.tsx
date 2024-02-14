import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Cynophilie</h2>

      <Image
        src="/cynophilie/cynophilie.jpeg"
        alt="Un conducteur et son chien"
        width={510}
        height={286}
      />

      <div className="space-y-8 mt-8">
        <Link className="link" href="#">
          Calendrier des épreuves UNUCR 2024
        </Link>

        <Link className="link" href="#">
          Compte-rendu Epreuve UNUCR Recto
        </Link>

        <Link className="link" href="#">
          Compte-rendu Epreuve UNUCR Verso
        </Link>

        <Link className="link" href="#">
          Engagement épreuve UNUCR - SCC
        </Link>

        <Link className="link" href="#">
          Feuilles de juge recherche au sang
        </Link>

        <Link className="link" href="#">
          Dos feuille de juge recherche au sang
        </Link>

        <Link className="link" href="#">
          Demande indemnités épreuve
        </Link>

        <Link className="link" href="#">
          Règlement Multiraces
        </Link>

        <Link className="link" href="#">
          Carnet CHASSE
        </Link>

        <Link className="link" href="#">
          Carnet CHASSE NON LOF
        </Link>

        <Link className="link" href="#">
          Carnet Teckels
        </Link>
      </div>
    </div>
  );
}
