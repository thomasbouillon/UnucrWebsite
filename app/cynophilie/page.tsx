import Image from "next/image";
import Link from "next/link";
import { FileLink } from "../FileLink";

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
        <FileLink className="link" filePath="calendrier-epreuves.pdf">
          Calendrier des épreuves UNUCR 2024
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/cr-epreuve-unucr-recto.pdf"
        >
          Compte-rendu Epreuve UNUCR Recto
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/cr-epreuve-unucr-verso.pdf"
        >
          Compte-rendu Epreuve UNUCR Verso
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/engagement-epreuve-unucr.pdf"
        >
          Engagement épreuve UNUCR - SCC
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/feuille-de-juge-recto.pdf"
        >
          Feuilles de juge recherche au sang
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/feuille-de-juge-verso.pdf"
        >
          Dos feuille de juge recherche au sang
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/demande-d-indemnite-epreuve.pdf"
        >
          Demande indemnités épreuve
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/reglement-multi-races.pdf"
        >
          Règlement Multiraces
        </FileLink>

        <FileLink className="link" filePath="cynophilie/carnet-chasse.pdf">
          Carnet CHASSE
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/carnet-chasse-non-lof.pdf"
        >
          Carnet CHASSE NON LOF
        </FileLink>

        <FileLink className="link" filePath="cynophilie/carnet-teckels.pdf">
          Carnet Teckels
        </FileLink>
      </div>
    </div>
  );
}
