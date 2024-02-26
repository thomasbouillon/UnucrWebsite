import Image from "next/image";
import { FileLink } from "../../FileLink";

export default function Page() {
  return (
    <div className="space-y-8">
      <h2 className="p-4 bg-secondary-100 rounded-lg">Devenir conducteur</h2>
      <section>
        <h3 className="text-primary-100 text-xl mb-4 font-bold font-serif">
          Devenir conducteur de chien de rouge
        </h3>
        <p>
          N&apos;est pas conducteur agréé qui veut. Un chien ayant fait
          occasionnellement une recherche sur un animal blessé n&apos;est pas un
          chien de rouge, et son propriétaire n&apos;est pas encore un
          conducteur.
          <br className="mb-2" />
          Pour devenir un conducteur opérationnel et performant il faut savoir
          que cela demande un investissement personnel fort pour être disponible
          au moment voulu, et pour former avec son chien une équipe ayant un
          maximum de chances de réussite en recherche.
          <br className="mb-2" />
          Pour devenir conducteur agréé de l&apos;Union Nationale pour
          l&apos;Utilisation de Chiens de Rouge (UNUCR), il faut respecter les
          conditions définies dans le contrat d&apos;agrément du conducteur.
          <br className="mb-2" />
          Et notamment :
          <br className="mb-2" />
          <ul>
            <li>Etre membre de l&apos;UNUCR,</li>
            <li>Etre titulaire d&apos;un permis de chasser validé.</li>
            <li>
              Participer à un stage organisé ou reconnu par l&apos;UNUCR, et
              compléter cette formation théorique et pratique par un parrainage.
            </li>
            <li>
              Eduquer un chiot et réussir ensuite une épreuve de recherche sur
              piste artificielle ou naturelle, ou son équivalent.
            </li>
          </ul>
        </p>
      </section>
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
                    filePath="conducteurs/devenir-conduteur/demande-dinscription-initiale.pdf"
                  >
                    Demande d&apos;inscription initiale sur la liste des
                    conducteurs agréés
                  </FileLink>
                </li>
                <li>ou</li>
                <li>
                  <FileLink
                    className="link"
                    filePath="conducteurs/devenir-conduteur/demande-de-retour.pdf"
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
          transmettre directement à Joël Roux par voie postale ou par mail.
          <br className="mb-2" />
          Joël Roux
          <br />
          7, impasse des Aramons
          <br />
          34550 Bessan
          <br />
          joel.roux34@orange.fr
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
