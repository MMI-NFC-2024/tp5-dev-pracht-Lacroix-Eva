// lancer en tapant dans la console :
// node --experimental-strip-types tests3.ts

import weather from "./weather.json" with { type: 'json' };

//** Compléter les en écrivant les parties :  */
/* TODO */
/* Désactiver COPILOT pour que vous fassiez l'effort de lire */

console.log("=== EXEMPLES DES MÉTHODES ARRAY AVEC LES DONNÉES MÉTÉO ===\n");
console.log(`Nombre total d'enregistrements météo: ${weather.length}\n`);

// ===== MÉTHODES D'ACCÈS AUX ÉLÉMENTS =====

console.log("--- MÉTHODES D'ACCÈS AUX ÉLÉMENTS ---");

// at() - Accède à un élément par son indice (accepte les indices négatifs)
console.log("• at() - Premier enregistrement:", weather.at(0)?.date);
console.log("• at() - Dernier enregistrement:", weather.at(-1)?.date);
console.log();

// slice() - Extrait une portion du tableau
console.log("• slice() - Les 3 premiers enregistrements:");
console.log(weather.slice(0, 3).map(w => `${w.date.split('T')[0]} - ${w.weather} (${w.temp_max}°C max)`));
console.log();

// ===== MÉTHODES DE RECHERCHE ET VÉRIFICATION =====

console.log("--- MÉTHODES DE RECHERCHE ET VÉRIFICATION ---");

// find() - Trouve le premier élément qui satisfait une condition
const premierJourPluie = weather.find(w => w.weather === "rain");
console.log("• find() - Premier jour de pluie:", premierJourPluie?.date.split('T')[0]);

// findIndex() - Trouve l'indice du premier élément qui satisfait une condition
const indexPremierNeige = weather.findIndex(w => w.weather === "snow");
console.log("• findIndex() - Index du premier jour de neige:", indexPremierNeige);

// indexOf() - Trouve l'indice d'un élément (comparaison stricte)
const typesMeteo = weather.map(w => w.weather);
console.log("• indexOf() - Index de 'sun' dans la liste des conditions:", typesMeteo.indexOf("sun"));

// lastIndexOf() - Trouve le dernier indice d'un élément
console.log("• lastIndexOf() - Dernier index de 'rain':", typesMeteo.lastIndexOf("rain"));

// includes() - Vérifie si un élément existe dans le tableau
console.log("• includes() - Y a-t-il du brouillard ('fog')?", typesMeteo.includes("fog"));

// some() - Teste si au moins un élément satisfait une condition
const auMoinsUnJourChaud = weather.some(w => w.temp_max > 35);
console.log("• some() - Y a-t-il des jours > 35°C?", auMoinsUnJourChaud);

// every() - Teste si tous les éléments satisfent une condition
const tousOntVent = weather.every(w => w.wind > 0);
console.log("• every() - Tous les jours ont du vent?", tousOntVent);
console.log();

// ===== MÉTHODES DE FILTRAGE =====

console.log("--- MÉTHODES DE FILTRAGE ---");

// filter() - Crée un nouveau tableau avec les éléments qui passent un test
const joursEnsoleilles = weather.filter(w => w.weather === "sun");
console.log("• filter() - Nombre de jours ensoleillés:", joursEnsoleilles.length);

const joursAvecPrecipitation = weather.filter(w => w.precipitation > 10);
console.log("• filter() - Jours avec fortes précipitations (>10mm):", joursAvecPrecipitation.length);
console.log();

// ===== MÉTHODES DE TRANSFORMATION =====

console.log("--- MÉTHODES DE TRANSFORMATION ---");

// map() - Transforme chaque élément et crée un nouveau tableau
const descriptions = weather.slice(0, 3).map(w => 
    `${w.date.split('T')[0]} - ${w.weather} - ${w.temp_min}°C à ${w.temp_max}°C`
);
console.log("• map() - Descriptions des 3 premiers jours:");
descriptions.forEach(desc => console.log("  ", desc));

/* IMPORTANT : noter ce code 
 * L'usage de `map` pour n'extraire qu'une propriété.
 * Et l'usage de `[...new Set()]` sur le résultat pour ne garder que les valeurs uniques
 * Cela servira pour le prochain TP
 */
const conditionsMeteo = weather.map(w => w.weather);
console.log("• map() - Conditions météo uniques:", [...new Set(conditionsMeteo)]);

// flatMap() - Applique une fonction puis aplatit d'un niveau
const caracteristiques = weather.slice(0, 2).flatMap(w => 
    [w.weather, w.temp_max.toString(), `${w.precipitation}mm`]
);
console.log("• flatMap() - Caractéristiques aplaties:", caracteristiques);

// reduce() - Réduit le tableau à une seule valeur
const precipitationTotale = weather.reduce((total, w) => 
    total + w.precipitation, 0
);
console.log("• reduce() - Précipitation totale:", precipitationTotale.toFixed(1), "mm");

const nbrParCondition = weather.reduce((acc, w) => {
    acc[w.weather] = (acc[w.weather] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• reduce() - Comptage par condition météo:", nbrParCondition);

// reduceRight() - Réduit de droite à gauche
const dernieresConditions = weather.slice(-3).reduceRight((acc, w) => 
    acc + w.weather + " ", ""
);
console.log("• reduceRight() - 3 dernières conditions (inversées):", dernieresConditions.trim());
console.log();

// ===== MÉTHODES DE TRI =====

console.log("--- MÉTHODES DE TRI ---");

// sort() - Trie les éléments (modifie le tableau original)
const temperaturesCopie = weather.slice(0, 5).map(w => w.temp_max);
console.log("• sort() - Températures max avant tri:", temperaturesCopie);
temperaturesCopie.sort((a, b) => a - b);
console.log("• sort() - Températures max après tri croissant:", temperaturesCopie);

// Tri par condition météo
const joursParCondition = weather.slice(0, 10).sort((a, b) => 
   a.weather.localeCompare(b.weather)
);
console.log("• sort() - 10 premiers jours triés par condition météo:");
joursParCondition.forEach(w => console.log(`  ${w.date.split('T')[0]} - ${w.weather} (${w.temp_max}°C)`));
console.log();

// ===== MÉTHODES D'ITÉRATION =====

console.log("--- MÉTHODES D'ITÉRATION ---");

// forEach() - Exécute une fonction pour chaque élément
console.log("• forEach() - Affichage des 3 premiers jours:");
weather.slice(0, 3).forEach((w, index) => {
    console.log(`  ${index + 1}. ${w.date.split('T')[0]} - ${w.weather} (${w.temp_min}°C à ${w.temp_max}°C)`);
});


// ===== MÉTHODES DE CONVERSION =====

console.log("--- MÉTHODES DE CONVERSION ---");

// join() - Joint tous les éléments en une chaîne
const premieresConditions = weather.slice(0, 5).map(w => w.weather);
console.log("• join() - Conditions séparées par ' | ':", premieresConditions.join(" | "));
console.log("• join() - Conditions séparées par des virgules:", premieresConditions.join(", "));

// toString() - Convertit en chaîne (équivalent à join(','))
console.log("• toString() - Premières précipitations:", weather.slice(0, 3).map(w => w.precipitation).toString());
console.log();

// ===== MÉTHODES DE CONCATÉNATION =====

console.log("--- MÉTHODES DE CONCATÉNATION ---");

// concat() - Joint des tableaux
const joursChauds = weather.filter(w => w.temp_max > 30).slice(0, 2);
const joursFroids = weather.filter(w => w.temp_max < 5).slice(0, 2);
const melange = [...joursChauds, ...joursFroids];
console.log("• concat() - Mélange jours chauds + jours froids:");
melange.forEach(w => console.log(`  ${w.date.split('T')[0]} - ${w.temp_max}°C (${w.weather})`));
console.log();

// ===== MÉTHODES D'APLATISSEMENT =====

console.log("--- MÉTHODES D'APLATISSEMENT ---");

// flat() - Aplatit les tableaux imbriqués
const groupesParSaison = [
    weather.filter(w => w.date.includes("-01-") || w.date.includes("-02-") || w.date.includes("-12-")).slice(0, 2).map(w => w.weather),
    weather.filter(w => w.date.includes("-06-") || w.date.includes("-07-") || w.date.includes("-08-")).slice(0, 2).map(w => w.weather),
    weather.filter(w => w.date.includes("-03-") || w.date.includes("-04-") || w.date.includes("-05-")).slice(0, 2).map(w => w.weather)
];
console.log("• flat() - Groupes par saison avant aplatissement:", groupesParSaison);
console.log("• flat() - Après aplatissement:", groupesParSaison.flat());
console.log();

// ===== STATISTIQUES FINALES =====

console.log("--- STATISTIQUES FINALES ---");

// Calculs statistiques utilisant différentes méthodes
const temperatures = weather.map(w => w.temp_max);
const temperatureTotale = temperatures.reduce((sum, temp) => sum + temp, 0);
const temperatureMoyenne = temperatureTotale / temperatures.length;
const temperatureMin = Math.min(...temperatures);
const temperatureMax = Math.max(...temperatures);

console.log("• Statistiques des températures maximales:");
console.log(`  - Température moyenne: ${temperatureMoyenne.toFixed(1)}°C`);
console.log(`  - Température minimale: ${temperatureMin}°C`);
console.log(`  - Température maximale: ${temperatureMax}°C`);

// Répartition par condition météo
const repartitionMeteo = weather.reduce((acc, w) => {
    acc[w.weather] = (acc[w.weather] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• Répartition par condition météo:", repartitionMeteo);

// Répartition par saison
const repartitionSaison = weather.reduce((acc, w) => {
    const mois = parseInt(w.date.split('-')[1]);
    let saison: string;
    if (mois >= 12 || mois <= 2) saison = "hiver";
    else if (mois >= 3 && mois <= 5) saison = "printemps";
    else if (mois >= 6 && mois <= 8) saison = "été";
    else saison = "automne";
    
    acc[saison] = (acc[saison] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• Répartition par saison:", repartitionSaison);

// =============================================
// GROUPEMENT DES DONNÉES AVEC Object.groupBy
// =============================================

console.log("\n--- GROUPEMENT AVEC Object.groupBy ---");

// Groupement par condition météo
console.log("• Object.groupBy() - Répartition par condition météo:");
const joursParMeteo = Object.groupBy(weather, jour => jour.weather);
for (const [condition, jours] of Object.entries(joursParMeteo)) {
    console.log(`  ${condition}: ${jours?.length || 0} jours`);
}

// Groupement par saison
console.log("\n• Object.groupBy() - Répartition par saison:");
const joursParSaison = Object.groupBy(weather, jour => {
    const mois = parseInt(jour.date.split('-')[1]);
    if (mois >= 12 || mois <= 2) return "hiver";
    if (mois >= 3 && mois <= 5) return "printemps";
    if (mois >= 6 && mois <= 8) return "été";
    return "automne";
});

Object.entries(joursParSaison)
    .sort(([a], [b]) => {
        const ordre = { "printemps": 1, "été": 2, "automne": 3, "hiver": 4 };
        return (ordre[a as keyof typeof ordre] || 5) - (ordre[b as keyof typeof ordre] || 5);
    })
    .forEach(([saison, jours]) => {
        console.log(`  ${saison}: ${jours?.length || 0} jours`);
    });

// Groupement par catégorie de température
console.log("\n• Object.groupBy() - Répartition par catégorie de température:");
const joursParCategorieTemp = Object.groupBy(weather, jour => {
    if (jour.temp_max < 0) return "très froid (<0°C)";
    if (jour.temp_max < 10) return "froid (0-10°C)";
    if (jour.temp_max < 20) return "doux (10-20°C)";
    if (jour.temp_max < 30) return "chaud (20-30°C)";
    return "très chaud (>30°C)";
});

Object.entries(joursParCategorieTemp)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([categorie, jours]) => {
        console.log(`  ${categorie}: ${jours?.length || 0} jours`);
    });

// Groupement par intensité des précipitations
console.log("\n• Object.groupBy() - Répartition par intensité des précipitations:");
const joursParPrecipitation = Object.groupBy(weather, jour => {
    if (jour.precipitation === 0) return "sec";
    if (jour.precipitation < 5) return "légères précipitations";
    if (jour.precipitation < 15) return "précipitations modérées";
    return "fortes précipitations";
});

Object.entries(joursParPrecipitation)
    .sort(([a], [b]) => {
        const ordre = { "sec": 1, "légères précipitations": 2, "précipitations modérées": 3, "fortes précipitations": 4 };
        return (ordre[a as keyof typeof ordre] || 5) - (ordre[b as keyof typeof ordre] || 5);
    })
    .forEach(([intensite, jours]) => {
        console.log(`  ${intensite}: ${jours?.length || 0} jours`);
    });

// Groupement par année
console.log("\n• Object.groupBy() - Répartition par année:");
const joursParAnnee = Object.groupBy(weather, jour => jour.date.split('-')[0]);

Object.entries(joursParAnnee)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([annee, jours]) => {
        console.log(`  ${annee}: ${jours?.length || 0} jours`);
    });

console.log("\n=== FIN DES EXEMPLES ===");

// /* TODO Faire de même pour d'autres dataset : https://observablehq.com/@observablehq/sample-datasets (Possible d'utiliser COPILOT */