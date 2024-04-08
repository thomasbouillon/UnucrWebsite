export default function routes() {
  return {
    home: () => "/",
    news: () => "/actualites.html",
    hunters: () => "/conducteurs.html",
    newOrUpdateHunter: () =>
      "/conducteurs/devenir-conducteur-ou-demande-agreement.html",
    cynophilie: () => "/cynophilie.html",
    shop: () => "/boutique.html",
    delegations: () => "/delegations-et-assocations-departementales.html",
    downloads: () => "/divers-et-telechargements.html",
    guarantee: () => "/fonds-de-garantie.html",
    geschasse: () => "/geschasse.html",
    newsPaper: () => "/jusquau-bout-la-revue.html",
    schedules: () => "/stages-unucr.html",
    links: () => "/liens.html",
  };
}
