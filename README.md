# Checkpoint 4 - Sujet sur une journée

Pour celles et ceux qui sont encore pris par les projets (ou autre raison valable), nous proposons un sujet de checkpoint 4 réalisable en une journée, au lieu des deux prévues pour le [sujet classique](https://odyssey.wildcodeschool.com/quests/655).

* Checkpoint réduit :

    * Thème unique : faire un portfolio. Il reste possible de partir sur un sujet différent **mais collant de près aux fonctionnalités qu'on demande ci-dessous** pour le portfolio.
    * Se concentre plus sur la partie purement technique / React / Node.js, moins sur le maquettage/intégration
    * Les user stories sont fournies, des templates HTML/CSS sont proposés comme base de départ, il vous reste tout de même à créer la base de données, à partir de suggestions

## Construire un portfolio

L'idée est de créer un portfolio en ligne présentant vos différents projets : projets réalisés en formation (incluant ceux de hackathon) ou projets personnels.

### User stories

* La page d'accueil affiche les différents projets, dans une mise en page responsive
* Un formulaire permet de saisir un nouveau projet

* Un bouton d'édition permet d'éditer le projet, avec un formulaire identique à celui de création, mais pré-rempli

### Pré-requis techniques

* Partie front :
    * utiliser React Router pour passer de la page d'accueil à la page d'ajout de projet

* Partie back : 
    * utiliser le routeur Express pour ne pas écrire ses routes directement sur "app"
    * utiliser dotenv pour configurer _au moins_ le mot de passe de connexion à la base de données

### Ressources

Pour vous alléger le travail d'intégration, on vous **propose**, sans vous les imposer, des templates existants.
Vous êtes libres d'utiliser un autre template, mais en ne récupérant que son HTML/CSS - **pas d'animations avec jQuery** ou autres qui peuvent être "cassées" par l'intégration dans React.

* Basé sur Bootstrap et fortement inspiré de leur Album Example, avec une mise en page sous forme de "cards" :

    * [Démo](https://bhubr.github.io/bootstrap-portfolio/)
    * [GitHub](https://github.com/bhubr/bootstrap-portfolio)
* Non-basé sur Bootstrap, avec les projets s'affichant en pleine largeur, les uns à la suite des autres : 

    * [Démo](https://portfolio-template.surge.sh/)
    * [GitHub](https://github.com/nisarhassan12/portfolio-template)

### Base de données

Vous aurez une seule table à créer, qui devra contenir les données d'un projet :

* Son nom,
* Sa description succinte,
* L'URL du repo GitHub,
* Eventuellement l'URL du projet déployé
* Le chemin d'une capture d'écran (vous pouvez stocker les images sous `public/` dans le front)

### Lancez-vous !

* Travaillez sur l'aspect back et front d'une user story avant de passer à la suivante
* Organisez vous comme cela vous arrange pour réaliser le checkpoint sur une journée en tout (mais vous pouvez déborder si le temps le permet !)
