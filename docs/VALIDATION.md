# Validation de la migration

Mesures locales le 11 novembre 2026, sur l’export de production Next.js servi par `scripts/preview.mjs` avec le chemin GitHub Pages `/Codiva/`.

- Build de production et TypeScript strict : réussis.
- Tests automatisés : métadonnées et langues des huit pages indexables, sitemap/robots, données structurées JSON, identité LinkedIn, mentions légales et libellés des formulaires.
- Chromium / Playwright : navigation FR→EN, préférence de thème après rechargement, menu mobile, validation des champs requis et email invalide, pages de services, page légale, absence de débordement mobile, absence d’erreurs JavaScript et de ressources HTTP en échec.
- `npm audit --omit=dev` : aucune vulnérabilité signalée au moment de la vérification.
- Lighthouse mobile local : performance **100**, accessibilité **100**, bonnes pratiques **100**, SEO **100**. LCP **1,1 s**, CLS **0**, TBT **40 ms**.

Audit lancé avec Lighthouse CLI, Chromium headless et l’export de production. Ces mesures de laboratoire dépendent de la machine et du réseau ; elles ne sont pas un score PageSpeed public ni des Core Web Vitals réels. Les avertissements de compression/cache du serveur d’aperçu doivent être réévalués sur l’hébergement public.

Aucun déploiement, vérification de propriété Search Console, audit de compte Semrush ou envoi réel du formulaire n’a été effectué. Le domaine public final et les informations légales restent à confirmer.

Le build et les 11 tests ont également réussi avec `NEXT_PUBLIC_SITE_URL=https://codiva.fr` : assets à la racine, URL canoniques et balise Search Console vérifiés avec un jeton de test. L’export final utilise de nouveau l’URL GitHub Pages par défaut, sans jeton de test.
