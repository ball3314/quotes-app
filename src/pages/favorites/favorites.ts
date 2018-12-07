import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { quoteService } from '../../service/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../service/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{
    private FavoritesQuote: Quote[] = [];
    constructor(private quoteService: quoteService, private modalCtrl: ModalController,private navParams: NavParams, private settingsService: SettingsService){}

    ngOnInit(){
        this.FavoritesQuote = this.quoteService.getFavoriteQuote();
    }

    goToQuote(quote){
        const modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss((remove: boolean)=>{
            console.log(remove);
        });
    }
    delete(quote: Quote){
        this.quoteService.removeQuoteFromFavorites(quote);
    }

    getBackground(): string{
        return this.settingsService.isAltBackground() ? 'altBG' : 'quoteBG';
    }

    isAltBG(): boolean{
        return this.settingsService.isAltBackground();
    }
}
