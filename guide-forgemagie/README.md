# Guide complet de la Forgemagie — axl-web

Site statique autonome en français, destiné à DOFUS PC. Aucune installation ni compilation nécessaires. Toutes les ressources sont locales, sans police distante ni suivi publicitaire.

## Voir le site

Extrais l’archive ZIP puis ouvre `index.html` dans ton navigateur. Conserve `style.css`, `app.js` et le dossier `assets` à côté de cette page.

## Publier gratuitement sur GitHub Pages

1. Ouvre ton dépôt `axl-web/guide-forgemagie` sur GitHub. Sauvegarde l’ancienne version si nécessaire.
2. Ajoute le contenu de ce dossier à la racine du dépôt : `index.html` doit être directement à la racine, pas dans un deuxième dossier.
3. Enregistre les fichiers dans la branche `main`.
4. Dans **Settings → Pages**, choisis **Deploy from a branch**, puis **main** et **/ (root)**. Enregistre.
5. Attends la fin de la publication. Adresse attendue : https://axl-web.github.io/guide-forgemagie/

Si Pages utilise déjà cette branche et ce dossier, mettre à jour les fichiers suffit. Les chemins relatifs fonctionnent dans ce sous-dossier. Le fichier vide `.nojekyll` désactive Jekyll ; le site reste compatible sans ce fichier si ton explorateur le masque.

## Intégrer tes captures du jeu

Trois emplacements d’images sont remplis par des schémas pédagogiques originaux :

- `assets/principe.svg` : étape 2, objet → rune → résultat.
- `assets/puits.svg` : étape 3, calcul de la réserve.
- `assets/gelano.svg` : étape 8, comparaison des objectifs.

Place ta capture dans `assets` (par exemple `atelier-dofus.webp`), puis remplace le `src` de l’image correspondante dans `index.html`. Adapte aussi le texte `alt`, la légende et les dimensions `width` / `height`. Utilise tes propres captures ou des images dont tu as les droits. Les schémas fournis ne sont pas des captures officielles de DOFUS.

## Personnaliser

- `index.html` : textes, tableaux, sources et structure.
- `style.css` : couleurs et affichage mobile, palette émeraude, vert vif et or.
- `app.js` : exemples SC/SN/EC, filtre des runes, convertisseur et calculateur de puits.
- `assets/favicon.svg` : icône du site.

Le texte reste lisible sans JavaScript. Les interactions nécessitent JavaScript. Aucun résultat n’est sauvegardé.

## Portée des outils

Puits pour une fusion ordinaire sans over, exo ni malus : puits précédent + poids réellement perdu − poids de la rune. En SC, il ne change pas. Une saisie incohérente est signalée au lieu d’afficher un puits négatif. Le convertisseur compte les points perdus. Aucun outil ne prédit le succès d’une rune.

Les références sont liées en bas de page. Certains guides historiques utilisent d’anciennes valeurs ; ce site prend les repères PC pour les effets ordinaires, notamment +5/+15/+50 vitalité pour des poids 1/3/10. Les effets spéciaux, Rétro et Touch ne sont pas couverts exhaustivement. Vérifie les conditions des runes spéciales en jeu.

Site de fans indépendant. DOFUS est une marque d’Ankama. Cette archive ne publie rien automatiquement et ne modifie pas ton dépôt GitHub.
