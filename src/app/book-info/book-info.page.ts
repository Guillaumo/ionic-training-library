import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Book, BookService } from '../book.service';
import { Browser } from '@capacitor/browser';
import { ScreenReader } from '@capacitor/screen-reader';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.page.html',
  styleUrls: ['./book-info.page.scss'],
})
export class BookInfoPage implements OnInit {

  private book: Book;
  private stateReader: string;
  constructor(private bookService: BookService, private toastController: ToastController) { }

  /**
   * 
   */
  ngOnInit() {
    this.book = this.bookService.getCurrent();
    this.stateReader = 'off';
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
   * Méthode du plugin Browser permettant d'utiliser le navigateur du mobile
   * @param book 
   */
  async openLinkExtern(book: Book) {
    await Browser.open({ url: book.linkExtern });
  }

  async readSummary(book: Book, stateReader: string) {
    console.log('stateReader : ', stateReader);

    if (stateReader === 'off') {
      await ScreenReader.speak({ language: "fr", value: book.summary });
      stateReader = 'on';
    } else {
      await ScreenReader.removeAllListeners();
      stateReader = 'off';
    }

  }

}
