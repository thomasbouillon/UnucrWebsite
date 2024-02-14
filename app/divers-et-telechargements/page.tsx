import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">
        Divers et téléchargements
      </h2>

      <div className="space-y-8 mt-8">
        <Link className="link" href="#">
          Statuts et Règlement Intérieur
        </Link>

        <Link className="link" href="#">
          Fiche gibier blessé
        </Link>

        <Link className="link" href="#">
          Triptyque UNUCR
        </Link>

        <p>
          <Link className="inline-link" href="#">
            Fiche statistiques Excel
          </Link>{" "}
          (pour usage uniquement départemental. Cette fiche ne dispense pas de
          l&apos;obligation d&apos;envoyer son rapport statistique Geschasse)
        </p>

        <p>
          <Link className="inline-link" href="#">
            Fiche statistiques PDF
          </Link>{" "}
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
