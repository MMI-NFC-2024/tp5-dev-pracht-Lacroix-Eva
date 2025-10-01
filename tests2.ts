// lancer en tapant dans la console :
// node --experimental-strip-types tests2.ts

import alphabet from "./alphabet.json" with { type: 'json' };

//** Compléter les en écrivant les parties :  */
/* TODO */
/* Désactiver COPILOT pour que vous fassiez l'effort de lire */

console.log("=== EXEMPLES DES MÉTHODES ARRAY AVEC LES DONNÉES ALPHABET ===\n");
console.log(`Nombre total de lettres: ${alphabet.length}\n`);

// ===== MÉTHODES D'ACCÈS AUX ÉLÉMENTS =====

console.log("--- MÉTHODES D'ACCÈS AUX ÉLÉMENTS ---");

// at() - Accède à un élément par son indice (accepte les indices négatifs)
console.log("• at() - Première lettre:", alphabet.at(0)?.letter);
console.log("• at() - Dernière lettre:", alphabet.at(-1)?.letter);
console.log();

// slice() - Extrait une portion du tableau
console.log("• slice() - Les 3 premières lettres:");
console.log(alphabet.slice(0, 3).map(l => `${l.letter} (${(l.frequency * 100).toFixed(2)}%)`));
console.log();

// ===== MÉTHODES DE RECHERCHE ET VÉRIFICATION =====

console.log("--- MÉTHODES DE RECHERCHE ET VÉRIFICATION ---");

// find() - Trouve le premier élément qui satisfait une condition
const lettreA = alphabet.find(l => l.letter === "A");
console.log("• find() - Fréquence de la lettre A:", lettreA?.frequency);

// findIndex() - Trouve l'indice du premier élément qui satisfait une condition
const indexA = alphabet.findIndex(l => l.letter === "A");
console.log("• findIndex() - Index de la lettre A:", indexA);

// indexOf() - Trouve l'indice d'un élément (comparaison stricte)
const lettres = alphabet.map(l => l.letter);
console.log("• indexOf() - Index de 'E' dans la liste des lettres:", lettres.indexOf("E"));

// lastIndexOf() - Trouve le dernier indice d'un élément
console.log("• lastIndexOf() - Dernier index de 'Z':", lettres.lastIndexOf("Z"));

// includes() - Vérifie si un élément existe dans le tableau
console.log("• includes() - Lettre 'Q' existe-t-elle?", lettres.includes("Q"));

// some() - Teste si au moins un élément satisfait une condition
const auMoinsUneFrequente = alphabet.some(l => l.frequency > 0.1);
console.log("• some() - Y a-t-il des lettres avec fréquence > 10%?", auMoinsUneFrequente);

// every() - Teste si tous les éléments satisfent une condition
const toutesOntFrequence = alphabet.every(l => l.frequency > 0);
console.log("• every() - Toutes ont une fréquence > 0?", toutesOntFrequence);
console.log();

// ===== MÉTHODES DE FILTRAGE =====

console.log("--- MÉTHODES DE FILTRAGE ---");

// filter() - Crée un nouveau tableau avec les éléments qui passent un test
const lettresFrequentes = alphabet.filter(l => l.frequency > 0.05);
console.log("• filter() - Nombre de lettres fréquentes (>5%):", lettresFrequentes.length);

const lettresRares = alphabet.filter(l => l.frequency < 0.02);
console.log("• filter() - Lettres rares (<2%):", lettresRares.length);
console.log();

// ===== MÉTHODES DE TRANSFORMATION =====

console.log("--- MÉTHODES DE TRANSFORMATION ---");

// map() - Transforme chaque élément et crée un nouveau tableau
const descriptions = alphabet.slice(0, 3).map(l => 
    `${l.letter} - ${(l.frequency * 100).toFixed(3)}%`
);
console.log("• map() - Descriptions des 3 premières:");
descriptions.forEach(desc => console.log("  ", desc));

/* IMPORTANT : noter ce code 
 * L'usage de `map` pour n'extraire qu'une propriété.
 * Et l'usage de `[...new Set()]` sur le résultat pour ne garder que les valeurs uniques
 * Cela servira pour le prochain TP
 */
const frequences = alphabet.map(l => l.frequency);
console.log("• map() - Fréquences uniques:", [...new Set(frequences)].length, "valeurs différentes");

// flatMap() - Applique une fonction puis aplatit d'un niveau
const caracteristiques = alphabet.slice(0, 2).flatMap(l => 
    [l.letter, l.frequency.toString(), `${(l.frequency * 100).toFixed(1)}%`]
);
console.log("• flatMap() - Caractéristiques aplaties:", caracteristiques);

// reduce() - Réduit le tableau à une seule valeur
const frequenceTotale = alphabet.reduce((total, l) => 
    total + l.frequency, 0
);
console.log("• reduce() - Fréquence totale:", frequenceTotale.toFixed(4));

const nbrParCategorie = alphabet.reduce((acc, l) => {
    const categorie = l.frequency > 0.05 ? "fréquente" : l.frequency > 0.02 ? "moyenne" : "rare";
    acc[categorie] = (acc[categorie] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• reduce() - Comptage par catégorie de fréquence:", nbrParCategorie);

// reduceRight() - Réduit de droite à gauche
const dernieresLettres = alphabet.slice(-3).reduceRight((acc, l) => 
    acc + l.letter + " ", ""
);
console.log("• reduceRight() - 3 dernières lettres (inversées):", dernieresLettres.trim());
console.log();

// ===== MÉTHODES DE TRI =====

console.log("--- MÉTHODES DE TRI ---");

// sort() - Trie les éléments (modifie le tableau original)
const frequencesCopie = alphabet.slice(0, 5).map(l => l.frequency);
console.log("• sort() - Fréquences avant tri:", frequencesCopie);
frequencesCopie.sort((a, b) => a - b);
console.log("• sort() - Fréquences après tri croissant:", frequencesCopie);

// Tri par lettre alphabétique
const lettresParOrdre = alphabet.slice(0, 10).sort((a, b) => 
   a.letter.localeCompare(b.letter)
);
console.log("• sort() - 10 premières triées par ordre alphabétique:");
lettresParOrdre.forEach(l => console.log(`  ${l.letter} - ${(l.frequency * 100).toFixed(3)}%`));
console.log();

// ===== MÉTHODES D'ITÉRATION =====

console.log("--- MÉTHODES D'ITÉRATION ---");

// forEach() - Exécute une fonction pour chaque élément
console.log("• forEach() - Affichage des 3 premières lettres:");
alphabet.slice(0, 3).forEach((l, index) => {
    console.log(`  ${index + 1}. ${l.letter} - ${(l.frequency * 100).toFixed(3)}%`);
});


// ===== MÉTHODES DE CONVERSION =====

console.log("--- MÉTHODES DE CONVERSION ---");

// join() - Joint tous les éléments en une chaîne
const premieresLettres = alphabet.slice(0, 5).map(l => l.letter);
console.log("• join() - Lettres séparées par ' | ':", premieresLettres.join(" | "));
console.log("• join() - Lettres séparées par des virgules:", premieresLettres.join(", "));

// toString() - Convertit en chaîne (équivalent à join(','))
console.log("• toString() - Premières fréquences:", alphabet.slice(0, 3).map(l => l.frequency).toString());
console.log();

// ===== MÉTHODES DE CONCATÉNATION =====

console.log("--- MÉTHODES DE CONCATÉNATION ---");

// concat() - Joint des tableaux
const voyelles = alphabet.filter(l => "AEIOU".includes(l.letter)).slice(0, 3);
const consonnes = alphabet.filter(l => !"AEIOU".includes(l.letter)).slice(0, 3);
const melange = [...voyelles, ...consonnes];
console.log("• concat() - Mélange voyelles + consonnes:");
melange.forEach(l => console.log(`  ${l.letter} - ${(l.frequency * 100).toFixed(3)}%`));
console.log();

// ===== MÉTHODES D'APLATISSEMENT =====

console.log("--- MÉTHODES D'APLATISSEMENT ---");

// flat() - Aplatit les tableaux imbriqués
const groupesParFrequence = [
    alphabet.filter(l => l.frequency > 0.05).slice(0, 2).map(l => l.letter),
    alphabet.filter(l => l.frequency > 0.02 && l.frequency <= 0.05).slice(0, 2).map(l => l.letter),
    alphabet.filter(l => l.frequency <= 0.02).slice(0, 2).map(l => l.letter)
];
console.log("• flat() - Groupes par fréquence avant aplatissement:", groupesParFrequence);
console.log("• flat() - Après aplatissement:", groupesParFrequence.flat());
console.log();

// ===== STATISTIQUES FINALES =====

console.log("--- STATISTIQUES FINALES ---");

// Calculs statistiques utilisant différentes méthodes
const frequencies = alphabet.map(l => l.frequency);
const frequenceTotaleCalc = frequencies.reduce((sum, freq) => sum + freq, 0);
const frequenceMoyenne = frequenceTotaleCalc / frequencies.length;
const frequenceMin = Math.min(...frequencies);
const frequenceMax = Math.max(...frequencies);

console.log("• Statistiques des fréquences:");
console.log(`  - Fréquence moyenne: ${(frequenceMoyenne * 100).toFixed(3)}%`);
console.log(`  - Fréquence minimale: ${(frequenceMin * 100).toFixed(3)}% (${alphabet.find(l => l.frequency === frequenceMin)?.letter})`);
console.log(`  - Fréquence maximale: ${(frequenceMax * 100).toFixed(3)}% (${alphabet.find(l => l.frequency === frequenceMax)?.letter})`);

// Répartition par type (voyelles/consonnes)
const repartitionType = alphabet.reduce((acc, l) => {
    const type = "AEIOU".includes(l.letter) ? "voyelle" : "consonne";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• Répartition par type:", repartitionType);

// Répartition par catégorie de fréquence
const repartitionFrequence = alphabet.reduce((acc, l) => {
    let categorie: string;
    if (l.frequency > 0.05) categorie = "très fréquente (>5%)";
    else if (l.frequency > 0.02) categorie = "fréquente (2-5%)";
    else categorie = "rare (<2%)";
    
    acc[categorie] = (acc[categorie] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• Répartition par fréquence:", repartitionFrequence);

// =============================================
// GROUPEMENT DES DONNÉES AVEC Object.groupBy
// =============================================

console.log("\n--- GROUPEMENT AVEC Object.groupBy ---");

// Groupement par type (voyelles/consonnes)
console.log("• Object.groupBy() - Répartition par type:");
const lettresParType = Object.groupBy(alphabet, lettre => 
    "AEIOU".includes(lettre.letter) ? "voyelle" : "consonne"
);
for (const [type, lettres] of Object.entries(lettresParType)) {
    console.log(`  ${type}: ${lettres?.length || 0} lettres`);
}

// Groupement par catégorie de fréquence
console.log("\n• Object.groupBy() - Répartition par catégorie de fréquence:");
const lettresParCategorie = Object.groupBy(alphabet, lettre => {
    if (lettre.frequency > 0.05) return "très fréquente";
    if (lettre.frequency > 0.02) return "fréquente";
    return "rare";
});

Object.entries(lettresParCategorie)
    .sort(([a], [b]) => {
        const ordre = { "très fréquente": 1, "fréquente": 2, "rare": 3 };
        return (ordre[a as keyof typeof ordre] || 4) - (ordre[b as keyof typeof ordre] || 4);
    })
    .forEach(([categorie, lettres]) => {
        console.log(`  ${categorie}: ${lettres?.length || 0} lettres`);
        if (lettres && lettres.length <= 10) {
            console.log(`    ${lettres.map(l => l.letter).join(", ")}`);
        }
    });

// Groupement par première lettre de l'alphabet (début, milieu, fin)
console.log("\n• Object.groupBy() - Répartition par position dans l'alphabet:");
const lettresParPosition = Object.groupBy(alphabet, lettre => {
    const code = lettre.letter.charCodeAt(0) - 65; // A=0, B=1, etc.
    if (code < 9) return "début (A-I)";
    if (code < 18) return "milieu (J-R)";
    return "fin (S-Z)";
});

Object.entries(lettresParPosition)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([position, lettres]) => {
        console.log(`  ${position}: ${lettres?.length || 0} lettres`);
    });

console.log("\n=== FIN DES EXEMPLES ===");

// /* TODO Faire de même pour d'autres dataset : https://observablehq.com/@observablehq/sample-datasets (Possible d'utiliser COPILOT */