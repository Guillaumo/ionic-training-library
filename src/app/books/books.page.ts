import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: Book[];
  constructor(private bookService: BookService, private actionSheetController: ActionSheetController, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.books = this.bookService.getAll();
  }

  /**
   * Méthode permettant l'ouverture de la popup d'actions sur un livre
   * @param book
   */
  async borrowedActionSheet(book: Book) {
    const actionSheet = await this.actionSheetController.create({
      header: `Vous voulez emprunter : ${book.title} ${book.author}`,
      buttons: [{
        text: 'Emprunter',
        icon: 'eye-off-outline',
        handler: () => this.borrowBook(book)
      }, {
        text: 'Annuler',
        icon: 'close',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

  /**
   * méthode permettant de modifier le statut du livre et d'afficher une notification de message
   * @param book
   */
  async borrowBook(book: Book) {
    if (book.status === 'borrowed') {
      const toast = await this.toastController.create({
        message: 'Le livre : ' + book.title + ' de ' + book.author + ' n\'est pas disponible, vous ne pouvez pas l\'emprunter.',
        position: 'top',
        duration: 3000
      });
      await toast.present();
    } else {
      book.status = 'borrowed';
      const toast = await this.toastController.create({
        message: 'Vous avez bien emprunté le livre : ' + book.title + ' de ' + book.author,
        position: 'top',
        duration: 3000
      });
      await toast.present();
    }

  }

  /**
   * Méthode permettant d'afficher le détail du livre sélectionné
   * @param book 
   */
  showInfo(book: Book) {
    this.bookService.setCurrent(book);
    this.router.navigateByUrl('book-info');
  }

}
