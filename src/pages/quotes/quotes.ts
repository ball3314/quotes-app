import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
    quotes: {category: string, quotes: Quote[], icon: string};
    quote: QuotePage;
    constructor(private navParams: NavParams, private navCtrl: NavController){}

    ionViewWillLoad(){
        this.quotes = this.navParams.data;
    }
    goToQuote() {
        // this.navCtrl.push(this.quote);
    }
}
