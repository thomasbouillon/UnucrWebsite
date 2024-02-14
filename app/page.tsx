import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-prose mx-auto space-y-8">
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">
        La recherche au sang
      </h2>

      <div className="space-y-2">
        <Link className="link" href="#">
          Les stages 2024
        </Link>
        <Link className="link" href="#">
          Le calendrier des épreuves 2024
        </Link>
      </div>

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

      <Link className="link" href="#">
        Le nouveau conseil d&apos;administration (7 juillet 2021)
      </Link>

      <Link className="link" href="#">
        Résultat des élections au conseil d’administration du 20 juin 2021
      </Link>

      <div>
        <Link className="link" href="#">
          Où en est la recherche, en 2017, dans nos départements
        </Link>
        <p>Une étude détaillée de la recherche UNUCR, en France.</p>
      </div>

      <article>
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          La recherche au sang
        </h3>
        Laisser, à la suite d&apos;une chasse, un animal blessé sans avoir
        entrepris une recherche est intolérable. On peut s&apos;imaginer les
        souffrances qu&apos;une blessure par balle peut engendrer. L&apos;animal
        peut mourrir quelques heures après le tir, mais également souffrir
        pendant plusieurs jours, voir plusieurs semaines.
        <br className="mb-2" />
        L&apos;éthique de la chasse au grand gibier exige impérativement que,
        par respect de l&apos;animal, ce dernier, lorsqu&apos;il est blessé,
        fasse l&apos;objet d&apos;une recherche systématique. Les meilleurs
        chances de succès ne peuvent être obtenues qu&apos;avec le concours de
        chiens spécialisés menés par des conducteurs formés et expérimentés.
        <br className="mb-2" />
        <span className="text-primary-100 font-serif font-bold">
          L&apos;Union Nationale pour l&apos;Utilisation de Chiens de Rouge
        </span>{" "}
        forme ces équipes, car la recherche du grand gibier blessé est une
        discipline qui demande beaucoup d&apos;efforts, d&apos;abnégation, des
        connaissances profondes de la morphologie et de l&apos;éthologie de
        celui-ci, une parfaite connaissance de l&apos;esprit de chasse liée à
        une grande prudence dans les actes, une nécessaire réserve dans
        l&apos;expression verbale et une harmonie totale du maître avec son
        chien de rouge.
        <br className="mb-2" />
        Fondée en 1980, sous le haut patronage de la Direction de la Protection
        de la Nature, du Ministère de l&apos;Environnement et du Cadre de Vie,
        de l&apos;Office National de la Chasse, de l&apos;Office National de
        Forêts, de l&apos;Union des Présidents de Fédérations Départementales de
        Chasseurs et de la Société Centrale Canine,
        <span className="text-primary-100 font-serif font-bold">
          l&apos;UNUCR
        </span>{" "}
        a, depuis sa création, formé un grand nombre d&apos;équipes
        conducteur-chien opérationnelles pour la recherche du grand gibier
        blessé.
        <Image
          src="/home_img_1.jpeg"
          alt="Chien de rouge à côté d'un sanglier"
          width={510}
          height={382}
          className="mx-auto mt-6"
        />
      </article>
    </div>
  );
}
