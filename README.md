# Portfolio GitHub Pages

Site statique bilingue français / anglais. Aucun outil de compilation ni dépendance n'est requis.

## Avant publication

1. Compléter le nom, le parcours et les expériences dans `index.html` et les deux dictionnaires de `site.js`.
2. Ajouter uniquement les coordonnées publiques dans `site.js`, objet `PUBLIC_CONTACTS`. Les coordonnées absentes restent marquées « à renseigner ».
3. Relire les descriptions des trois démos. Il s'agit d'illustrations simplifiées, distinctes des applications et modèles locaux.
4. Créer un dépôt public nommé `<nom-du-compte>.github.io` sur le nouveau compte GitHub et y envoyer **uniquement le contenu de ce dossier**. Dans Settings → Pages, choisir « Deploy from a branch », branche `main`, dossier `/ (root)`.

## Limite concernant les robots

`robots.txt` demande aux robots coopératifs d'éviter `/demos/`, et chaque page de démo porte une directive `noindex`. Sur une page GitHub Pages publique, ces directives sont volontaires : elles ne bloquent ni l'accès direct ni un robot qui les ignore. Pour interdire réellement l'accès aux démos, il faut les héberger derrière une authentification sur un service distinct. Le `robots.txt` livré suppose un dépôt utilisateur `<nom-du-compte>.github.io` à la racine du domaine ; sur un dépôt projet publié sous un sous-chemin, cette règle à la racine n'est pas applicable.

## Vérification locale

Depuis ce dossier : `python3 -m http.server 8000`, puis ouvrir `http://localhost:8000`.
