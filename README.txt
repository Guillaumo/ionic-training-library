Projet Ionic de gestion d'emprunt de livres dans une bibliothéque.

L'application Library est une application permettant de gérer les emprunts de documents dans une bibliothèque.

Dans l'état actuel des chose :

Il aura 3 pages :
- une page d'accueil
- une pages des livres référencés par la bibliothèque
- une page de détails du livre sélectionner

Il y aura un menu présent sur toutes ces pages facilitant l'accès à chaque page

Les fonctionalités :
* dans la page liste des livres :
	- possibilité de voir si les livres sont disponibles ou non à l'emprunt
	- possibiité de pouvoir emprunter un livre
* dans la page détail du livre
	- possibilité d'afficher le détail d'un livre :
		. titre, auteur,...
		. un résumé
		. un lien externe vers l'auteur
	- possibilité d'écouter le résumé du livre
	- possibilité d'emprunter le livre si disponible

Les plugins Capacitor à implémenter :
- Browser pour ouvrir le lien internet notamment sur une page décriavant l'auteur
- Sreen reader pour faire lire le résumé du livre

Les évolutins possibles :
- avoir une liste plus exhautive de livres d'une bibliothèque via une api afin récupérer ladite liste d'une base de données
- se connecter à l'application via un formulaire de connexion qui implique un tableau ou une table des emprunteurs qui permettrait de savoir ce qu'on a emprunté
- gérer les dates d'emprunts et les dates de retours en tenant commpte de la durée officielle d'emprunt des documents pour chaque emprunteur
- pouvoir faire des recherches de livres et notamment de filtrer par genre
