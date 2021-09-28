import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Book, BookService } from '../book.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.page.html',
  styleUrls: ['./book-info.page.scss'],
})
export class BookInfoPage implements OnInit {

  private book: Book;
  constructor(private bookService: BookService, private toastController: ToastController) { }

  /**
   * 
   */
  ngOnInit() {
    this.book = this.bookService.getCurrent();
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

  async openLinkExtern(book: Book) {
    await Browser.open({ url: book.linkExtern });
  }


}
