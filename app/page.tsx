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
          Lors du Gamefair, le samedi 18 juin à 14h avait lieu l'assemblée
          générale de l'UNUCR
          <br className="mb-2" />
          Ce fut pour nous l'occasion d'annoncer une grande nouvelle qui devrait
          dynamiser encore d'avantage l'association : l'UNUCR vient d'être
          reconnue d'intérêt général par l'administration !
          <br className="mb-2" />
          Nous avons été reconnus désintéressés, exerçant à titre non lucratif
          (bénévole) et d'intérêt général.
          <br className="mb-2" />
          Sur un plan éthique si c'était indiscutable et indiscuté au sein du
          monde cynégétique, c'est maintenant officiellement reconnu par
          l'administration, et notamment l'administration fiscale
          <br className="mb-2" />
          Pour nos bénévoles justement cela va induire une déduction partielle
          des kilomètres parcourus sur leur feuille d'impôt, pour nos adhérents
          et nos donateurs idem sur le montant des dons et des adhésions avec
          une déduction à 66% !
          <br className="mb-2" />
          Tout cela va se formaliser concrètement pour la saison à venir, et par
          les temps qui courrent ça va être apprécié des intéressés. Nous
          communiquerons en interne pour les modalités.
          <br className="mb-2" />
          Un énorme merci à Cyrille PICCOT CREZOLLET (74), administrateur élu en
          juillet dernier et dont la profession de foi intégrait ce but à
          atteindre qu'était l'obtention de la reconnaissance d'intérêt général.
          <br className="mb-2" />
          Nicolas BOUILLON
        </p>
      </article>

      <article className="mt-8">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          Communiqué
        </h3>
        <p className="space-y-2">
          Comme tous les intervenants cynégétiques de notre pays, l'UNUCR se
          sent concernée par la maladie d'Aujeszky ou pseudorage, frappant
          sporadiquement les chiens, dans des départements de plus en plus
          nombreux.
          <br className="mb-2" />
          Sans vouloir se substituer aux autorités compétentes en la matière (la
          maladie d'Aujeszky est une maladie réglementée à déclaration
          obligatoire), l'UNUCR se propose de collecter le plus possible
          d'informations sur le sujet, particulièrement concernant les cas de
          chiens morts de la maladie tout en étant vaccinés.
          <br className="mb-2" />
          Nous vous proposons de nous informer des cas dont vous auriez
          connaissance précise (lieux, dates, effectif concerné, coordonnées des
          propriétaires) à l'adresse:
          <span className="block underline text-blue-800 font-bold">
            pseudorage.unucr@gmail.com
          </span>
          Participons tous à la collecte d'information, quant à cette maladie
          mortelle et sans traitement pour nos compagnons.
          <br className="mb-2" />
          L'UNUCR vous remercie.
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
        Laisser, à la suite d'une chasse, un animal blessé sans avoir entrepris
        une recherche est intolérable. On peut s'imaginer les souffrances qu'une
        blessure par balle peut engendrer. L'animal peut mourrir quelques heures
        après le tir, mais également souffrir pendant plusieurs jours, voir
        plusieurs semaines.
        <br className="mb-2" />
        L'éthique de la chasse au grand gibier exige impérativement que, par
        respect de l'animal, ce dernier, lorsqu'il est blessé, fasse l'objet
        d'une recherche systématique. Les meilleurs chances de succès ne peuvent
        être obtenues qu'avec le concours de chiens spécialisés menés par des
        conducteurs formés et expérimentés.
        <br className="mb-2" />
        <span className="text-primary-100 font-serif font-bold">
          L'Union Nationale pour l'Utilisation de Chiens de Rouge
        </span>{" "}
        forme ces équipes, car la recherche du grand gibier blessé est une
        discipline qui demande beaucoup d'efforts, d'abnégation, des
        connaissances profondes de la morphologie et de l'éthologie de celui-ci,
        une parfaite connaissance de l'esprit de chasse liée à une grande
        prudence dans les actes, une nécessaire réserve dans l'expression
        verbale et une harmonie totale du maître avec son chien de rouge.
        <br className="mb-2" />
        Fondée en 1980, sous le haut patronage de la Direction de la Protection
        de la Nature, du Ministère de l'Environnement et du Cadre de Vie, de
        l'Office National de la Chasse, de l'Office National de Forêts, de
        l'Union des Présidents de Fédérations Départementales de Chasseurs et de
        la Société Centrale Canine,
        <span className="text-primary-100 font-serif font-bold">
          l'UNUCR
        </span>{" "}
        a, depuis sa création, formé un grand nombre d'équipes conducteur-chien
        opérationnelles pour la recherche du grand gibier blessé.
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
