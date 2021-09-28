import { Injectable } from '@angular/core';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  ISBN: string;
  summary?: string;
  thumbnail?: string;
  linkExtern?: string;
  status?: 'available' | 'borrowed';
}

const mockBooks: Book[] =
  [
    { id: '1', title: 'L\'esprit de la ruche', author: 'Jean Meurisse et Catherine Meurisse', genre: 'documentaire', ISBN: '273738494X', summary: "Il y a plus d'un million d'espèces d'insectes dans le monde, mais depuis l'Antiquité aucun n'a fasciné autant les hommes que l'abeille, au point qu'elle est devenue l'animal le plus étudié au monde, juste après l'homme! Des milliers de chercheurs de tous pays scrutent sa vie, analysent son comportement, et chacune de leurs découvertes, toutes aussi surprenantes les unes que les autres, ne fait qu'épaissir les mystères qui entourent ce minuscule insecte. Nos connaissances actuelles aboutissent au constat, presque inconcevable, que le groupe au sein duquel vit l'abeille, la colonie, présente des similitudes troublantes avec une société humaine, capable de communiquer, de faire des choix, de prendre des décisions capitales, de gérer le quotidien avec efficacité. Jean Meurisse nous invite à découvrir dans un langage accessible le fabuleux univers des abeilles.", thumbnail: '/assets/images/L-esprit-de-la-ruche-la-vie-secrete-des-abeilles.jpg', linkExtern: 'https://fr.wikipedia.org/wiki/Catherine_Meurisse', status: 'available' },
    { id: '2', title: 'Sous les vents de Neptune', author: 'Fred Vargas', genre: 'policier', ISBN: '2-87858-190-3', summary: "Alors qu'il s'apprête à se rendre au Québec pour « une formation de deux semaines ciblée sur le traitement des empreintes génétiques », Adamsberg tente de renouer le dialogue avec Danglard, mais il est victime d'un malaise inexplicable. Le commissaire finit cependant, avec l'aide de Danglard qui lui commente un tableau représentant le dieu Neptune, par saisir ce qui le trouble. La lecture d'un article de presse, relatant l'assassinat d'une jeune fille de trois coups de couteau, vient de faire resurgir en lui d'atroces souvenirs : ceux de son frère inculpé quelque trente ans auparavant pour le meurtre de sa fiancée et à qui Adamsberg a pu épargner la prison en falsifiant le dossier à charge, mais qu'il n'a jamais réussi à innocenter, malgré son identification certaine de l'assassin. Le jeune policier qu'il était alors n'est jamais parvenu à faire entendre sa voix, car le véritable meurtrier n'était autre qu'un juge respecté. En désespoir de cause, il a tout de même continué sa traque, suivant le meurtrier pas à pas, jusqu'à la mort de ce dernier. Adamsberg avait donc vu s'envoler à jamais l'espoir d'innocenter totalement son frère. Cependant, quatorze ans après et contre toute logique, il lui faut se lancer sur les traces de ce fantôme. Pourtant, cette fois, il a affaire à un ennemi qui utilisera tous les moyens pour le faire sombrer, en plus de lui échapper ; un ennemi qui le forcera à endosser un autre rôle : celui d'une proie et non d'un chasseur.Adamsberg devra accepter l'aide de ceux dont il espérait le moins, et se méfier des autres.", thumbnail: '/assets/images/sous_les_vents_de_neptune.jpg', linkExtern: 'https://fr.wikipedia.org/wiki/Fred_Vargas', status: 'borrowed' },
    { id: '3', title: 'Le Meilleur des mondes', author: 'Aldous Huxley', genre: 'science fiction', ISBN: '2-266-02310-1', summary: "Voici près d'un siècle, dans d'étourdissantes visions, Aldous Huxley imagine une civilisation future jusque dans ses rouages les plus surprenants : un État Mondial, parfaitement hiérarchisé, a cantonné les derniers humains « sauvages » dans des réserves. La culture in vitro des fœtus a engendré le règne des « Alphas », génétiquement déterminés à être l'élite dirigeante. Les castes inférieures, elles, sont conditionnées pour se satisfaire pleinement de leur sort. Dans cette société où le bonheur est loi, famille, monogamie, sentiments sont bannis. Le meilleur des mondes est possible. Aujourd'hui, il nous paraît même familier...", thumbnail: '/assets/images/Le-meilleur-des-mondes.jpg', linkExtern: 'https://fr.wikipedia.org/wiki/Aldous_Huxley', status: 'available' },
    {
      id: '4', title: 'Cyrano de Bergerac', author: 'Edmond Rostand', genre: 'Théâtre', ISBN: '', summary: "En lien avec le thème « Dire l’amour » du nouveau programme de français en 4e, la comédie héroïque d’Edmond Rostand dans une édition « Spécial théâtre » : avec des ateliers théâtre et des photos de mise en scène. La pièce : Cyrano de Bergerac aime en secret sa cousine Roxane mais sa disgrâce physique et sa grande générosité l'amènent à se sacrifier au profit du jeune Christian. Portée par la verve et le panache du personnage principal, la pièce nous fait rire et nous émeut tout à la fois.", thumbnail: '/assets/images/Cyrano-de-Bergerac.jpg', linkExtern: 'https://fr.wikipedia.org/wiki/Edmond_Rostand', status: 'available'
    },
    { id: '5', title: 'Astérix en Corse', author: 'René Goscinny et Albert Uderzo', genre: 'bande dessinée', ISBN: '2-01-210152-6', summary: "Lors de la fête d’anniversaire de Gergovie, les Gaulois du village d’Astérix invitent la plupart des protagonistes qu'ils ont rencontré au cours des précédentes aventures, et décident de fêter la victoire en attaquant le camp de Babaorum (les autres camps ayant été abandonnés pour décourager les Gaulois). Alors que les Romains sont battus à plate couture, Astérix et ses amis découvrent un prisonnier corse du nom d’Ocatarinetabellatchitchix. Ce dernier leur explique qu’il a été enlevé par les Romains, et qu’il est le chef d’un village corse qui résiste lui aussi à l’envahisseur. Suelburnus, le gouverneur romain de la Corse, va bientôt partir pour Rome ramener tout l’argent des impôts de l’année, il ne veut pas qu’Ocatarinetabellatchitchix lui prenne une fois de plus l’argent. Astérix et Obélix sont chargés de l’aider et se rendent sur place en utilisant le navire pirate.", thumbnail: '/assets/images/Asterix-en-Corse.jpg', linkExtern: 'https://fr.wikipedia.org/wiki/Ren%C3%A9_Goscinny', status: 'borrowed' }

  ]

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private currentBook: Book;

  constructor() { }
  getAll() {
    return [...mockBooks];
  }

  /**
   * Setter permettant de sélectionner le livre en question
   * @param book 
   */
  setCurrent(book: Book) {
    this.currentBook = book;
  }

  /**
   * Getter permettant d'obtenir le livre sélectionné
   * @returns curentBook
   */
  getCurrent() {
    return this.currentBook;
  }
}
