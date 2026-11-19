# Portfolio GitHub Pages

Site statique bilingue français / anglais. Aucun outil de compilation ni dépendance n'est requis.

## État actuel

Le site est publié sur `https://glanoux-research.github.io/` depuis la branche `main` du dépôt `glanoux-research/glanoux-research.github.io`. Les coordonnées publiques ont été vérifiées. Le diplôme d'ingénieur INSA Toulouse est **en cours** ; aucune date d'obtention n'est annoncée.

La biographie combine le CV fourni, les précisions du propriétaire, son profil LinkedIn et sa [fiche sur le site du Deep Learning Lab](https://dllab.snu.ac.kr/m_professor/). Le laboratoire le présente dans un parcours de double diplôme INSA Toulouse–SNU et décrit ses intérêts de recherche. Le profil LinkedIn indique des études à Seoul National University en 2026–2027 et évoque des cours d'optimisation GPU.

## À décider

- Choisir les démos définitives. Les trois aperçus actuels sont provisoires et distincts des applications et modèles locaux.
- Définir l'esthétique dans une étape ultérieure.

## Commentaires

La section « Commentaires » intègre [giscus](https://giscus.app/) avec un fil GitHub Discussions du dépôt. Les visiteurs peuvent lire les messages sur le site et se connecter à GitHub pour commenter. Les commentaires sont publics et peuvent être modérés dans la [discussion dédiée](https://github.com/glanoux-research/glanoux-research.github.io/discussions/1).

Le site ne reçoit ni ne rend lui-même le contenu des commentaires : le module giscus les affiche dans une iframe indépendante. `giscus.json` limite l'intégration au domaine du site. L'application GitHub giscus doit être autorisée pour **ce dépôt uniquement** afin que le widget puisse publier les commentaires.

## Limite concernant les robots

`robots.txt` demande aux robots coopératifs d'éviter `/demos/`, et chaque page de démo porte une directive `noindex`. Sur une page GitHub Pages publique, ces directives sont volontaires : elles ne bloquent ni l'accès direct ni un robot qui les ignore. Pour interdire réellement l'accès aux démos, il faut les héberger derrière une authentification sur un service distinct. Le `robots.txt` livré suppose un dépôt utilisateur `<nom-du-compte>.github.io` à la racine du domaine ; sur un dépôt projet publié sous un sous-chemin, cette règle à la racine n'est pas applicable.

## Vérification locale

Depuis ce dossier : `python3 -m http.server 8000`, puis ouvrir `http://localhost:8000`.
