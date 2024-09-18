import Image from "next/image";
import { FileLink } from "../../FileLink";

export default function Page() {
  return (
    <div className="space-y-8">
      <h2 className="p-4 bg-secondary-100 rounded-lg">Devenir conducteur</h2>
      <section>
        <h3 className="text-primary-100 text-xl mb-4 font-bold font-serif">
          Faire sa demande d&apos;agrément
        </h3>
        <p>
          Vous avez effectué le stage UNUCR et réussi une épreuve de recherche
          agréée par l&apos;UNUCR. Les documents ci-dessous vont vous permettre
          de demander votre inscription sur la liste des conducteurs agréés de
          l&apos;UNUCR:
          <br className="mb-2" />
          <ul className="list-disc list-inside">
            <li className="pl-4 list-none">
              <ul className="">
                <li className="list-disc">
                  <FileLink
                    className="link"
                    filePath="conducteurs/demande-dinscription-initiale.pdf"
                  >
                    Demande d&apos;inscription initiale sur la liste des
                    conducteurs agréés
                  </FileLink>
                </li>
                <li>ou</li>
                <li>
                  <FileLink
                    className="link"
                    filePath="conducteurs/demande-de-retour.pdf"
                  >
                    Demande de retour sur la liste des conducteurs agréés
                  </FileLink>
                </li>
              </ul>
            </li>
            <li>
              <FileLink
                className="inline link"
                filePath="conducteurs/code-dhonneur.pdf"
              >
                Code d&apos;honneur (à signer et à joindre au dossier)
              </FileLink>
            </li>
            <li>
              La photocopie du permis de chasser avec sa validation en cours
            </li>
            <li>
              La photocopie de l&apos;attestation d&apos;assurance couvrant
              l&apos;acte de recherche
            </li>
            <li>
              La photocopie du diplôme ou l&apos;attestation de réussite du
              chien signée ou des justificatifs adéquats
            </li>
            <li>La photocopie de l&apos;attestation de stage UNUCR</li>
          </ul>
          L&apos;ensemble des documents est à transmettre à votre responsable
          départemental qui transmettra à Joël Roux, administrateur en charge de
          ces dossiers.
          <br className="mb-2" />
          En l&apos;absence de responsable départemental le dossier est à
          transmettre directement à Marie Doyen par voie postale ou par mail.
          <br className="mb-2" />
          Marie DOYEN
          <br />
          19 rue du Colombier
          <br />
          41200 MILLANCAY
          <br />
          Tél. 06 81 66 56 09
          <br />
          maje.doyen@orange.fr
        </p>
      </section>

      <Image
        src="/conducteurs/devenir-conducteur.jpeg"
        alt="Chien de rouge"
        width={430}
        height={286}
        className="mx-auto mt-6"
      />
    </div>
  );
}
