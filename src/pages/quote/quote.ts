import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController, ViewController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { quoteService } from '../../service/quotes';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit{
    quote: Quote;
    constructor(private navParams: NavParams, private navCtrl: NavController, private view: ViewController, private quoteService: quoteService){}

    ngOnInit(){
        this.quote = this.navParams.data;
    }
    close(){
        this.view.dismiss(true);
    }
    notFavorite(){
        this.quoteService.removeQuoteFromFavorites(this.quote);
        this.close();
    }
}
