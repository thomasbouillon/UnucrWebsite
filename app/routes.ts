export default function routes() {
  return {
    home: () => "/",
    news: () => "/actualites",
    hunters: () => "/conducteurs",
    newOrUpdateHunter: () =>
      "/conducteurs/devenir-conducteur-ou-demande-agreement",
    cynophilie: () => "/cynophilie",
    shop: () => "/boutique",
    delegations: () => "/delegations-et-assocations-departementales",
    downloads: () => "/divers-et-telechargements",
    guarantee: () => "/fonds-de-garantie",
    geschasse: () => "/geschasse",
    newsPaper: () => "/jusquau-bout-la-revue",
    schedules: () => "/stages-unucr",
    links: () => "/liens",
  };
}
