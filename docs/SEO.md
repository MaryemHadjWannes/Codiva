# Référencement et mise en ligne

## 1. Définir l’URL de référence

La valeur par défaut est l’URL GitHub Pages existante : `https://maryemhadjwannes.github.io/Codiva`. Elle est centralisée dans `lib/site.ts` et utilisée pour canonical, hreflang, sitemap, images sociales et données structurées.

Pour utiliser un domaine personnalisé :

1. Configurer son DNS et HTTPS chez l’hébergeur ; sur GitHub Pages, configurer aussi Custom domain.
2. Définir la variable de dépôt GitHub Actions `NEXT_PUBLIC_SITE_URL` avec l’URL HTTPS publique exacte, sans slash final, par exemple `https://codiva.fr`. La configuration Next déduit automatiquement le chemin de base.
3. Reconstruire et déployer. En local, utiliser la même valeur dans `.env.local` (exemple dans `.env.example`).
4. Vérifier les URL canoniques et `/sitemap.xml` sur le site public, puis les redirections HTTP→HTTPS et www→domaine retenu. Les redirections entre domaines se règlent chez l’hébergeur, pas dans un export statique.

Ne pas laisser deux domaines publics concurrents : l’ancien hôte doit rediriger vers le domaine retenu si possible. Un changement d’URL après indexation demande un plan de redirection. L’ancienne URL de mentions légales `.html` possède un fallback HTML ; un hébergeur qui permet des redirections HTTP devrait utiliser un 301.

## 2. Google Search Console

Aucun compte Google n’est requis par le site ; son propriétaire doit vérifier la propriété.

- Méthode recommandée : propriété **Domaine**, avec le TXT DNS fourni par Search Console.
- Alternative : propriété **Préfixe d’URL** correspondant exactement à l’URL publique. Pour la méthode balise HTML, placer uniquement le jeton de vérification dans la variable GitHub Actions `GOOGLE_SITE_VERIFICATION`, reconstruire et déployer. En local, cette variable peut être définie dans `.env.local`.
- Soumettre l’URL publique de `sitemap.xml`.
- Inspecter l’accueil EN (`/`), l’accueil FR (`/fr/`) et une page de service ; contrôler canonical choisie par Google, indexabilité et rendu mobile.
- Suivre Indexation des pages, Performances et Signaux Web essentiels après collecte de données. Une soumission ne garantit ni indexation ni classement.

Pour Bing Webmaster Tools, utiliser la vérification DNS ou `BING_SITE_VERIFICATION` (jeton `msvalidate.01`), puis soumettre le même sitemap. Aucun accès de compte n’a été configuré ou utilisé pendant cette migration.

## 3. Semrush et autres robots

Créer un projet sur le domaine public exact et lancer un **Site Audit** après le déploiement. Si le site reste dans `/Codiva`, limiter le crawl à ce sous-répertoire. Utiliser le sitemap comme source, inclure FR et EN et contrôler : liens cassés, codes HTTP, canonical, hreflang réciproques, titres/descriptions uniques, ressources et profondeur de navigation.

Le contenu est disponible dans le HTML sans JavaScript ; aucun plugin Semrush n’est nécessaire. `robots.txt` autorise les robots. La page légale est volontairement en `noindex,follow` et absente du sitemap. Configurer le suivi de positions selon les marchés, langues et mots-clés réellement ciblés, par exemple développement web freelance, logiciel sur mesure et développement smart contracts. Ces exemples ne constituent pas une étude de volume ou de concurrence Semrush.

## 4. Performance, accessibilité et SEO technique

- Export statique ; interactivité limitée aux contrôles d’affichage et au formulaire.
- Pas de polices tierces bloquantes : pile de polices système, aucun appel Google Fonts.
- Logos SVG, pas d’image lourde au-dessus de la ligne de flottaison, pas de scripts marketing.
- Une URL et un `html lang` par langue ; alternates et canonical explicites.
- Titres, descriptions et métadonnées sociales propres à chaque page ; un H1 par page.
- Données structurées factuelles, sans avis, notes, adresse ou certifications inventés.
- Réduction des animations selon `prefers-reduced-motion`, labels de formulaire et messages accessibles.

Lancer PageSpeed Insights sur le site déployé (mobile et desktop). Les mesures Lighthouse locales ne remplacent pas les données réelles CrUX, collectées uniquement quand le trafic est suffisant. Les en-têtes de cache, la compression et HTTPS relèvent de l’hébergement statique ; vérifier leur configuration en production.

Commandes de validation : `npm run build`, `npm test`, `npm run typecheck`. Les tests vérifient les huit pages indexables, leurs métadonnées, langues, données structurées et leur présence dans le sitemap.

Le SEO éditorial reste continu : publier de vraies études de cas quand elles existent, décrire problèmes et résultats vérifiables, maintenir les contenus et développer des liens pertinents. Ne pas créer de pages locales ou de témoignages fictifs. Aucun score ou classement Google ne peut être garanti.


## Dépanner une erreur 404 sur GitHub Pages

Le dépôt utilise actuellement `claude/ei-freelance-website-form-9sfcx5` comme branche par défaut ; aucune branche `main` n’était présente lors du diagnostic. Le workflow publie désormais lors d’un push sur la branche par défaut, quelle que soit son appellation. Les autres branches et les pull requests sont seulement validées. Un lancement manuel publie la branche sélectionnée.

1. Publier les modifications Next.js dans le dépôt GitHub. Une modification locale dans Codex ne modifie pas le site public.
2. Dans **Settings → Pages → Build and deployment → Source**, sélectionner **GitHub Actions**. Ne pas publier directement la racine du dépôt : Next.js produit le site dans `out/`.
3. Dans **Actions → Validate and deploy Next.js to GitHub Pages**, vérifier les jobs `build` et `deploy`. Si nécessaire, lancer **Run workflow** depuis la branche contenant la migration.
4. Attendre la réussite du job `deploy`, puis consulter l’URL affichée par le déploiement. Si une protection de l’environnement `github-pages` impose une approbation ou limite les branches, autoriser la branche par défaut dans ses réglages.

L’export contient `out/index.html`, et le workflow téléverse `out/`. Le dossier `out/` ne doit pas être commité : il est généré par le job de build. Si le job échoue, son message d’erreur permet de distinguer un problème de compilation, de permissions Pages ou de protection d’environnement.


## Langue principale et identité Codiva

L’anglais est désormais la langue principale à `/`, et le français est à `/fr/`. Les pages de services ont des URL anglaises sous `/services/` et françaises sous `/fr/services/`. Les alternates FR/EN sont réciproques ; `x-default` pointe vers l’anglais. Le sitemap ne contient que les huit pages canoniques. Les anciennes adresses possèdent un fallback HTML avec canonical et `noindex,follow` ; configurer des redirections 301 si un futur hébergeur le permet.

Les titres, descriptions, contenus et données structurées présentent la marque **Codiva**. Aucun profil `Person` ou nom de fondateur n’est ajouté au balisage. Le PDF original et l’adresse personnelle ne sont pas dans le dépôt ou l’export.

La localisation est facultative et pilotée par `NEXT_PUBLIC_BUSINESS_CITY`. Utiliser une ville uniquement lorsque le propriétaire choisit de la publier. Ne pas déduire une zone d’intervention ou une adresse d’accueil client du document administratif. Une fois la ville choisie, enrichir les descriptions locales de manière factuelle et envisager une fiche Google Business Profile seulement si l’activité remplit ses conditions d’éligibilité.

La FAQ visible en FR/EN répond aux questions sur le prix, le périmètre, le devis et le suivi ; aucun résultat enrichi FAQ n’est promis. Prioriser les vraies études de cas et des liens pertinents pour progresser dans les résultats de recherche. Le score Lighthouse SEO contrôle des bases techniques et ne prédit pas un classement Google.
