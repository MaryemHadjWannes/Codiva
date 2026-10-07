# Codiva — Portfolio

Site vitrine de **Codiva**, l'entreprise individuelle de **Maryem Hadj Wannes**, développeuse fullstack freelance.

> Codiva développe des applications web, des logiciels et des solutions blockchain, de l'analyse du besoin jusqu'à la mise en ligne.

Site statique (HTML / CSS / JavaScript, sans framework ni build) : bilingue FR/EN, thème clair/sombre, responsive, formulaire de contact.

## Structure

```
index.html              Page principale (services, méthode, compétences, projets, à propos, contact)
mentions-legales.html   Mentions légales (obligatoires pour une EI)
assets/css/style.css    Styles
assets/js/config.js     ← Vos infos : email, LinkedIn, formulaire
assets/js/main.js       Traductions, thème, menu, formulaire
assets/                 Favicons, icônes et image de partage (og-image.png)
brand/                  Kit logo complet (SVG, PNG, LinkedIn, réseaux sociaux)
```

## Charte graphique

Bleu nuit `#0F2A47` · Or `#E9A23B` (`#F2B04A` sur fond sombre) · Crème `#F4F3EF` · Nuit `#0B1624` — titres en Poppins.
Le kit logo complet est dans `brand/` (voir `brand/README.txt`). Pour LinkedIn : `brand/linkedin/`.

## À personnaliser

1. **`assets/js/config.js`** : email pro, URL LinkedIn, et l'adresse du formulaire.
2. **Formulaire de contact** : créez un formulaire gratuit sur [formspree.io](https://formspree.io), puis collez son URL dans `formEndpoint`. Tant qu'il est vide, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli.
3. **`mentions-legales.html`** : remplacez les `[À COMPLÉTER]` (SIREN, SIRET, adresse).
4. **Photo** : ajoutez `assets/photo.jpg` et remplacez le bloc `MHW` dans la section « À propos ».
5. **Projets** : un modèle de carte projet est en commentaire dans la section `#projects`.
6. **Compétences** : ajustez les listes de la section `#stack`.

## Voir le site en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne (GitHub Pages, gratuit)

1. Fusionnez sur la branche `main`.
2. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` publie le site à chaque push sur `main`, à l'adresse `https://maryemhadjwannes.github.io/Codiva/`.
4. Nom de domaine perso (ex. `codiva.fr`) : **Settings → Pages → Custom domain**.
