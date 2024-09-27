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
        <p>
          Devenir conducteur, c&apos;est d&apos;abord former un chien à la
          recherche au sang. Celui-ci pourra être non-LOF en tant que premier
          chien, mais devra obligatoirement être inscrit au LOF dans les autres
          cas.
          <br className="mb-2" />
          Vous trouverez dans les liens rapides de la colonne de gauche le
          calendrier des épreuves pour l&apos;année en cours, et ci-dessous
          divers documents nécessaires. N&apos;hésitez pas à consulter le
          règlement qui ordonnance nos épreuves.
        </p>

        <FileLink
          className="link"
          filePath="cynophilie/reglement-multi-races.pdf"
        >
          Règlement Multiraces
        </FileLink>

        <FileLink className="link" filePath="calendrier-epreuves.pdf">
          Calendrier des épreuves UNUCR
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

        <FileLink
          className="link"
          filePath="cynophilie/demande-licence-proprietaire.pdf"
        >
          Demande de licence propriétaire
        </FileLink>

        <FileLink
          className="link"
          filePath="cynophilie/demande-licence-conducteur.pdf"
        >
          Demande de licence conducteur
        </FileLink>
      </div>
    </div>
  );
}
