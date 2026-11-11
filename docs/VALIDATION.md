# Validation de la version Codiva

Vérifications locales le 11 novembre 2026 sur l’export de production Next.js, sous le chemin GitHub Pages `/Codiva/`.

- L’anglais est principal à `/` ; le français est à `/fr/`.
- Build de production et TypeScript strict : réussis.
- 13 tests : canonical et hreflang réciproques, `x-default` anglais, sitemap/robots, données structurées Codiva, identifiants RNE, FAQ et formulaire rendus dans le HTML, liens de services et anciennes adresses.
- Chromium / Playwright : changement de langue, liens des services, FAQ, thème après rechargement, menu mobile, absence de débordement, validation du formulaire, anciennes URL et SIRET sur la page légale. Aucune ressource en échec ni erreur JavaScript.
- Contrôle de l’export et des bundles navigateur : absence du nom personnel affiché et de l’adresse du document ; aucun PDF dans l’export public. Le nom du compte GitHub reste nécessaire dans l’adresse d’hébergement existante.
- Lighthouse mobile local : performance **99**, accessibilité **100**, bonnes pratiques **100**, SEO **100**. LCP **1,1 s**, CLS **0**, TBT **120 ms**.

Mesures de laboratoire avec Lighthouse CLI et Chromium headless. Ces résultats varient selon la machine et ne constituent ni des données CrUX réelles ni une garantie de positionnement Google. Compression et cache sont à vérifier sur l’hébergement public.

Aucune vérification de propriété Search Console, action dans Semrush ou soumission réelle du formulaire n’a été effectuée. La ville publique reste facultative et vide. Les informations légales d’une EI restent à faire valider (voir LEGAL-REVIEW.md).
