import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { quoteService } from '../../service/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
    quotes: {category: string, quotes: Quote[], icon: string};
    quote: QuotePage;
    constructor(private navParams: NavParams, private navCtrl: NavController, private quoteService: quoteService, private alertCtrl: AlertController){}

    ionViewWillLoad(){
        this.quotes = this.navParams.data;
    }
    onToFavorites(quote) {
        const alert = this.alertCtrl.create({
            title: 'Add to favorites',
            message: 'Are you sure add to favorites?',
            buttons: [
                {
                    text: 'Yes, I am sure!',
                    role: 'OK',
                    handler: ()=>{
                        console.log('addToFavorites');
                        this.quoteService.addQuoteToFavorites(quote);
                    }
                },
                {
                    text: 'No, I change my mind!',
                    role: 'cancel',
                    handler: ()=>{
                        console.log('cancel');
                    }
                }
            ]
        });
        alert.present();
    }
    notFavorites(quote: Quote){
        this.quoteService.removeQuoteFromFavorites(quote);
    }
    isFavorite(quote: Quote){
        return this.quoteService.isFavorite(quote);
    }
}
