# Codiva — Next.js

Site de Maryem Hadj Wannes, développeuse full-stack freelance. Next.js App Router, React et TypeScript strict. Le design navy / gold d’origine est conservé. Les pages sont prégénérées et exportées dans `out/` ; aucun serveur applicatif ni base de données n’est nécessaire en production.

## Développement

Node.js 24 et npm. Utiliser le checkout existant ; les tâches cloud sont déjà isolées, sans worktree supplémentaire.

```bash
npm ci
npm run dev
```

Par défaut, le site est monté sous `/Codiva`, comme sur GitHub Pages. Pour un domaine à la racine, définir `NEXT_PUBLIC_SITE_URL` dans `.env.local` avant de lancer Next.js.

```bash
npm run build
npm test
npm run typecheck
npm start
```

`npm start` lance un aperçu local de `out/` sur le port 3000, avec le même chemin de base que le déploiement. Ce serveur sert uniquement à vérifier l’export. Les modifications des variables d’environnement nécessitent une reconstruction. Les processus ne sont pas conservés lors du démarrage d’une nouvelle tâche.

## Pages et contenu

- `/` : accueil français ; `/en/` : accueil anglais, tous deux rendus avant JavaScript.
- `/services/developpement-web/`, `/services/logiciels-sur-mesure/`, `/services/blockchain/` et équivalents sous `/en/`.
- `/mentions-legales/` : mentions et confidentialité en français, `noindex,follow`. L’ancienne URL `.html` redirige côté navigateur.
- `/sitemap.xml` et `/robots.txt` : générés par Next.js.

Les textes sont dans `lib/translations.ts` et `lib/services.ts`. L’identité, les URL et les métadonnées sont dans `lib/site.ts`. Les visuels sont dans `public/assets/` ; le kit de marque reste dans `brand/`.

Le formulaire prépare un email dans la messagerie du visiteur et ne prétend pas envoyer un message côté serveur. Aucun envoi réel n’est nécessaire pour tester les champs. Aucun script publicitaire, cookie de suivi ou outil analytique n’est ajouté.

## Déploiement et référencement

Le workflow GitHub Actions construit, teste et déploie **uniquement `out/`** sur GitHub Pages après un push sur la branche par défaut du dépôt (actuellement `claude/ei-freelance-website-form-9sfcx5`), ou un lancement manuel du workflow. Les autres branches et les pull requests construisent et testent sans déployer. Activer Settings → Pages → GitHub Actions. Aucun déploiement n’est effectué par la présente modification.

Consulter [le guide SEO](docs/SEO.md) pour le domaine, Search Console, Bing, Semrush et les mesures PageSpeed. La configuration inclut canonical, hreflang FR/EN/x-default, Open Graph, Twitter Cards et données structurées Organization, Person, WebSite, WebPage, Service et BreadcrumbList.

Avant publication : compléter les mentions légales (SIREN, SIRET, adresse, régime de TVA) et confirmer les informations d’hébergement. Aucun identifiant légal, avis client, prix ou résultat commercial n’est inventé.
