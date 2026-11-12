# Validation de la version Codiva

## Direction visuelle — 12 novembre 2026

- Accueil inspiré de la maquette : bleu nuit, accents manuscrits dorés et illustrations géométriques SVG. Police Caveat servie localement, sous licence OFL incluse ; aucune requête Google Fonts au chargement.
- Anglais et thème sombre par défaut, y compris avec un système configuré en clair. Le choix de thème explicite reste mémorisé.
- `npm run build`, les 13 tests existants et `npm run typecheck` : réussis.
- Chromium / Playwright sur l’export : pages EN et FR aux largeurs 320, 390, 768, 820, 946 et 1440 px, sans débordement horizontal. Vérification du thème après rechargement, menu mobile, FAQ, validation des trois champs obligatoires et navigation vers une page de service : réussie. Aucune erreur JavaScript de page.
- Captures ordinateur et mobile relues. Mentions légales conservées ; aucun nouveau document légal n’a été fourni pour vérification. La recherche web évoquée reste à préciser.
- Les scores Lighthouse ci-dessous concernent la version précédente ; ils n’ont pas été remesurés pour cette direction visuelle.

### Correction du logo

La charte graphique fournie a été relue : le logo horizontal officiel remplace le symbole redessiné et le nom composé en police système, en en-tête et en pied de page. Les deux SVG publiés sont identiques aux fichiers du kit de marque (`cmp`), sans modification des tracés, couleurs, proportions ou espacement interne. Les versions pour fond sombre et clair ont été vérifiées dans Chromium ; le thème du site sélectionne la bonne version. Les contrôles navigateur EN/FR aux six largeurs et les commandes de validation ci-dessus passent après cette correction.

## Version précédente

Vérifications locales le 11 novembre 2026 sur l’export de production Next.js, sous le chemin GitHub Pages `/Codiva/`.

- L’anglais est principal à `/` ; le français est à `/fr/`.
- Build de production et TypeScript strict : réussis.
- 13 tests : canonical et hreflang réciproques, `x-default` anglais, sitemap/robots, données structurées Codiva, identifiants RNE, FAQ et formulaire rendus dans le HTML, liens de services et anciennes adresses.
- Chromium / Playwright : changement de langue, liens des services, FAQ, thème après rechargement, menu mobile, absence de débordement, validation du formulaire, anciennes URL et SIRET sur la page légale. Aucune ressource en échec ni erreur JavaScript.
- Contrôle de l’export et des bundles navigateur : absence du nom personnel affiché et de l’adresse du document ; aucun PDF dans l’export public. Le nom du compte GitHub reste nécessaire dans l’adresse d’hébergement existante.
- Lighthouse mobile local : performance **99**, accessibilité **100**, bonnes pratiques **100**, SEO **100**. LCP **1,1 s**, CLS **0**, TBT **120 ms**.

Mesures de laboratoire avec Lighthouse CLI et Chromium headless. Ces résultats varient selon la machine et ne constituent ni des données CrUX réelles ni une garantie de positionnement Google. Compression et cache sont à vérifier sur l’hébergement public.

Aucune vérification de propriété Search Console, action dans Semrush ou soumission réelle du formulaire n’a été effectuée. La ville publique reste facultative et vide. Les informations légales d’une EI restent à faire valider (voir LEGAL-REVIEW.md).
