import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import quotes from '../../data/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quoteCollection : {category: string, quotes: Quote[], icon: string}[];
  quote = QuotesPage;

  constructor(public navCtrl: NavController) {
    this.quoteCollection = quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
