import { Quote } from "../data/quote.interface";

export class quoteService {
    private quotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote){
        console.log(quote);
        if(this.quotes.find((ele)=>{ return ele.id == quote.id; })){
            return;
        } else {
            this.quotes.push(quote);
        }
    }

    removeQuoteFromFavorites(quote: Quote){
        const id = this.quotes.findIndex((quoteEL) => {
            return quoteEL.id == quote.id;
        });
        this.quotes.splice(id, 1);
    }

    getFavoriteQuote(): Quote[]{
        return this.quotes;
    }

    isFavorite(quote: Quote){
        return this.quotes.find((ele)=>{
            return quote.id == ele.id;
        });
    }
}
