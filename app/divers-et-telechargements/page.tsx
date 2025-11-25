import Image from "next/image";
import Link from "next/link";
import { FileLink } from "../FileLink";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">
        Divers et téléchargements
      </h2>

      <div className="space-y-8 mt-8">
        <FileLink className="link" filePath="divers/statuts-et-ri-unucr.pdf">
          Statuts et Règlement Intérieur
        </FileLink>

        <FileLink
          className="link"
          filePath="divers/modele_fiche_gibier_blesse.pdf"
        >
          Fiche gibier blessé
        </FileLink>

        <FileLink className="link" filePath="divers/tryptique-unucr.pdf">
          Triptyque UNUCR
        </FileLink>

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

        <Image
          src="/divers-et-telechargements/divers1.jpeg"
          alt=""
          width={510}
          height={364}
          aria-hidden
        />

        <Image
          src="/divers-et-telechargements/divers1.jpeg"
          alt=""
          width={510}
          height={364}
          aria-hidden
        />
      </div>
    </div>
  );
}
