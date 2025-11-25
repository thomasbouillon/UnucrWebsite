import Image from "next/image";
import Link from "next/link";
import { FileLink } from "../FileLink";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Geschasse</h2>

      <h3 className="text-primary-100 font-serif font-bold mb-4">
        Nouvelle version en ligne : Geschasse (v2)
      </h3>

      <div className="flex flex-col items-center">
        <Link
          className="text-center mb-4 text-2xl"
          target="_blank"
          href="https://www.geschasse.fr"
        >
          geschasse.fr
        </Link>

        <Image
          src="/geschasse/geschasse.jpeg"
          alt="Un chien avec une blessure"
          width={264}
          height={454}
        />
      </div>

      <div className="space-y-8 mt-8">
        <p>
          <strong className="text-red-500 text-xl">
            Depuis le 1er juillet 2022, vous ne devez plus utiliser
            l&apos;ancien Geschasse.{" "}
          </strong>
          <br className="mb-2" />
          Vous devez uniquement utiliser Geschasse.fr pour rentrer, en ligne,
          vos statistiques.
          <br className="mb-2" />
          Cliquez sur{" "}
          <FileLink
            filePath="geschasse/mode-d-emploi.pdf"
            className="inline-link"
          >
            ce lien
          </FileLink>{" "}
          pour télécharger le mode d&apos;emploi du nouveau Geschasse (v2).
          <br className="mb-2" />
          <FileLink
            filePath="geschasse/faire-ses-statistiques.pdf"
            className="inline-link"
            target="_blank"
          >
            Faire ses statistiques
          </FileLink>{" "}
          avec le nouveau Geschasse (v2)
          <br className="mb-2" />
          Pour tout renseignement s&apos;adresser à Nicolas Bouillon.
        </p>

        <p>
          <FileLink
            className="inline-link"
            filePath="geschasse/fiche-statistiques.xlsx"
          >
            Fiche statistiques Excel
          </FileLink>{" "}
          (pour usage uniquement départemental. Cette fiche ne dispense pas de
          l&apos;obligation d&apos;envoyer son rapport statistique Geschasse)
        </p>

        <p>
          <FileLink
            className="inline-link"
            filePath="geschasse/fiche-statistiques.pdf"
          >
            Fiche statistiques PDF
          </FileLink>{" "}
          (pour usage uniquement départemental. Cette fiche ne dispense pas de
          l&apos;obligation d&apos;envoyer son rapport statistique Geschasse)
        </p>
      </div>
    </div>
  );
}
