![Logo de l'application 80s-90s Flixx](/images/logo/Flixx-logo.webp)

# Contexte

Cette application est un projet personnel développé en 2023.

# Résumé

**80s-90s Flixx** est une application de recherche de films des années 80 et 90, avec un module de filtrage des recherches et un tableau de bord permettant d'enregistrer des favoris, des films vus et des films à voir.

# Lien vers l'application

[https://flixx80s90s.onrender.com/](https://flixx80s90s.onrender.com/)

# Dépôts

Ce dépôt contient uniquement le **back-end** de l'application.

Le front-end : [https://github.com/TomDvpmt/80s-90s-Flixx-frontend](https://github.com/TomDvpmt/80s-90s-Flixx-frontend)

# Technologies utilisées (MERN)

-   MongoDB Atlas
-   JavaScript ES6
-   Node.js
-   Mongoose
-   Express
-   Bcrypt
-   JWT
-   ReactJS
-   React Router 6
-   Redux
-   Redux Toolkit
-   PropTypes
-   Material UI

# Fonctionnalités

-   donnés cinéma issues d'une API externe (The Movie Database), avec plus de 35 000 films répertoriés pour la période 80s-90s :

![page d'accueil](/images/captures/flixx-home.webp)

-   une fiche détaillée par film :

![page film](/images/captures/flixx-movie.webp)

-   module de recherche par titre :

![recherche](/images/captures/flixx-search.webp)

-   filtrage par date et genre :

![filtres](/images/captures/flixx-filters.webp)

-   fiches individuelles avec filmographie complète pour les réalisateurs, scénaristes et acteurs :

![fiche individuelle](/images/captures/flixx-person.webp)

-   tableau de bord avec films favoris, films vus et films à voir :

![taleau de bord](/images/captures/flixx-dashboard.webp)

# Fonctionnalités à venir

-   choix de langue pour l'application (français ou anglais)
-   choix du thème (clair / sombre)
-   module de recherche de personnes
-   ajout des bandes-annonces
-   ajout des producteurs
-   possibilité d'ajouter une photo de profil
-   création de listes par l'utilisateur

# Installation

-   Créer une base de données sur [MongoDB Atlas](https://www.mongodb.com/atlas/database), avec une collection intitulée "AppCine_80s-90s" et un utilisateur autorisé à manipuler cette collection.

-   Dans l'interface de MongoDB, cliquer sur le bouton "Connect", choisir "Connect to your application" et noter le "connection string", dans lequel figure le cluster de la base de données (nécessaire pour l'étape suivante).

-   Dans le répertoire racine de l'application, créer un fichier `.env` contenant les instructions suivantes (ne pas conserver les balises `<>`):

```
MONGO_DBNAME=AppCine_80s-90s
MONGO_USERNAME=<nom de l'utilisateur de la collection>
MONGO_PASSWORD=<mot de passe de cet utilisateur>
MONGO_CLUSTER=<cluster de la base de données (exemple : cluster0.lhpmlqm)>

TOKEN_SECRET_PHRASE=<choisir une phrase complexe>
```

-   Toujours dans le répertoire racine, exécuter la commande :

`npm install`

# Lancement du serveur

-   Dans le répertoire racine, exécuter la commande :

`npm start`
