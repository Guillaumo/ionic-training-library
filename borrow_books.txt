Projet Ionic de gestion d'emprunt de livres dans une bibliothéque.

Il aura 3 pages :
- une page d'accueil
- une pages des livres présents dans la bibliothèque
- une page de détails du livre

Il y aura un menu présent sur toutes ces pages facilitant l'accès à chaque page

Les fonctionalités :
* dans la page liste des livres :
	- possibilité de voir si les livres sont disponibles ou non à l'emprunt
	- possibiité de pouvoir emprunter un livre avec sa date d'emprunt et la date de retour
	- possibilité de le rendre et de contôler la date de retour ?
* dans la page détail du livre
	- possibilité d'afficher le détail d'un livre :
		. titre, auteur,...
		. un résumé
		. un lien externe vers l'auteur
		. un lien externe vers livre audio 
- possibilité d'écouter le résumé du livre

Les plugins Capacitor à implémenter :
- Browser pour ouvrir le lien internet notamment sur une page décriavant l'auteur
- Sreen reader pour faire lire le résumé du livre

Les évolutins possibles :
- avoir une liste plus exhautive de livres d'une bibliothèque via une api afin récupérer ladite liste d'une base de données
- se connecter à l'application via un formulaire de connexion qui implique un tableau ou une table des emprunteurs qui permettrait de savoir ce qu'on a emprunté