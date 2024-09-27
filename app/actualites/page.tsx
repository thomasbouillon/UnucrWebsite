import Link from "next/link";
import { FileLink } from "../FileLink";
import Image from "next/image";

export default function Page() {
  return (
    <div className="space-y-8">
      <h2 className="p-4 bg-secondary-100 rounded-lg">Actualités</h2>

      <div>
        <Link
          className="link"
          href="https://www.unucr.fr/jusquau-bout-la-revue-de/quelques-anciens-articles/ou-en-est-la-recherche-en.pdf"
        >
          Où en est la recherche, en 2017, dans nos départements
        </Link>
        <p>Une étude détaillée de la recherche UNUCR, en France.</p>
      </div>

      <article>
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          L&apos;UNUCR reconnue d&apos;intérêt général par l&apos;administration
          !
        </h3>
        <p className="space-y-2">
          Le 09 juin 2022, l&#39;UNUCR a été reconnue d&#39;intérêt général par
          l&#39;administration.
          <br className="mb-2" />
          Nous avons été reconnus désintéressés, exerçant à titre non lucratif
          (bénévole) et d&#39;intérêt général. Sur un plan éthique si
          c&#39;était indiscutable et indiscuté au sein du monde cynégétique,
          c&#39;est maintenant officiellement reconnu par l&#39;administration,
          et notamment l&#39;administration fiscale.
          <br className="mb-2" />
          Pour nos bénévoles éligibles justement, cela va induire une déduction
          partielle des kilomètres parcourus sur leur feuille d&#39;impôt, pour
          nos adhérents et nos donateurs idem sur le montant des dons et des
          adhésions avec une déduction à 66% !
          <br className="mb-2" />
          Un énorme merci à Cyrille PICCOT CREZOLLET (74), vice-président de
          l’UNUCR, qui a plus que contribué à l’obtention de cette
          reconnaissance officielle.
          <br className="mb-2" />
          Nicolas BOUILLON
        </p>
      </article>

      <article>
        <FileLink className="link" filePath="organigramme-unucr.pdf">
          Le nouveau conseil d&apos;administration
        </FileLink>

        <FileLink className="link" filePath="resultats-elections-unucr.pdf">
          Résultat des élections au conseil d&apos;administration
        </FileLink>
      </article>

      <article>
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          Communiqué
        </h3>
        <p className="space-y-2">
          Comme tous les intervenants cynégétiques de notre pays, l&apos;UNUCR
          se sent concernée par la maladie d&apos;Aujeszky ou pseudorage,
          frappant sporadiquement les chiens, dans des départements de plus en
          plus nombreux.
          <br className="mb-2" />
          Sans vouloir se substituer aux autorités compétentes en la matière (la
          maladie d&apos;Aujeszky est une maladie réglementée à déclaration
          obligatoire), l&apos;UNUCR se propose de collecter le plus possible
          d&apos;informations sur le sujet, particulièrement concernant les cas
          de chiens morts de la maladie tout en étant vaccinés.
          <br className="mb-2" />
          Nous vous proposons de nous informer des cas dont vous auriez
          connaissance précise (lieux, dates, effectif concerné, coordonnées des
          propriétaires) à l&apos;adresse:
          <span className="block underline text-blue-800 font-bold">
            pseudorage.unucr@gmail.com
          </span>
          Participons tous à la collecte d&apos;information, quant à cette
          maladie mortelle et sans traitement pour nos compagnons.
          <br className="mb-2" />
          L&apos;UNUCR vous remercie.
        </p>
      </article>

      <Link className="link" href="http://www.acufa.fr/" target="_blank">
        L&apos;ACUFA communique : redevance GARMIN français, souscrivez en ligne
        !
      </Link>

      <FileLink
        className="link"
        filePath="actualites/14-10-2013-nouvelle-legislation.pdf"
      >
        Nouvelle législation sur les armes (Fiches pédagogiques - Origine Comité
        Guillaume TELL)
      </FileLink>

      <Image
        src="/actualites/image.jpg"
        alt="Jeune homme avec un chien de rouge dans les bras"
        width={700}
        height={525}
        className="mx-auto mt-6"
      />
    </div>
  );
}
