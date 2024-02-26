import Link from "next/link";
import { FileLink } from "../FileLink";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Actualités</h2>

      <article className="mt-8">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          L&apos;UNUCR vient d&apos;être reconnue d&apos;intérêt général par
          l&apos;administration !
        </h3>
        <p className="space-y-2">
          Lors du Gamefair, le samedi 18 juin à 14h avait lieu l&apos;assemblée
          générale de l&apos;UNUCR
          <br className="mb-2" />
          Ce fut pour nous l&apos;occasion d&apos;annoncer une grande nouvelle
          qui devrait dynamiser encore d&apos;avantage l&apos;association :
          l&apos;UNUCR vient d&apos;être reconnue d&apos;intérêt général par
          l&apos;administration !
          <br className="mb-2" />
          Nous avons été reconnus désintéressés, exerçant à titre non lucratif
          (bénévole) et d&apos;intérêt général.
          <br className="mb-2" />
          Sur un plan éthique si c&apos;était indiscutable et indiscuté au sein
          du monde cynégétique, c&apos;est maintenant officiellement reconnu par
          l&apos;administration, et notamment l&apos;administration fiscale
          <br className="mb-2" />
          Pour nos bénévoles justement cela va induire une déduction partielle
          des kilomètres parcourus sur leur feuille d&apos;impôt, pour nos
          adhérents et nos donateurs idem sur le montant des dons et des
          adhésions avec une déduction à 66% !
          <br className="mb-2" />
          Tout cela va se formaliser concrètement pour la saison à venir, et par
          les temps qui courrent ça va être apprécié des intéressés. Nous
          communiquerons en interne pour les modalités.
          <br className="mb-2" />
          Un énorme merci à Cyrille PICCOT CREZOLLET (74), administrateur élu en
          juillet dernier et dont la profession de foi intégrait ce but à
          atteindre qu&apos;était l&apos;obtention de la reconnaissance
          d&apos;intérêt général.
          <br className="mb-2" />
          Nicolas BOUILLON
        </p>
      </article>

      <article className="mt-8">
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

      <div className="space-y-8 mt-8">
        <Link className="link" href="http://www.acufa.fr/">
          L&apos;ACUFA communique : redevance GARMIN français, souscrivez en
          ligne !
        </Link>

        <FileLink
          className="link"
          filePath="actualites/14-10-2013-nouvelle-legislation.pdf"
        >
          Nouvelle législation sur les armes (Fiches pédagogiques - Origine
          Comité Guillaume TELL)
        </FileLink>
      </div>
    </div>
  );
}
