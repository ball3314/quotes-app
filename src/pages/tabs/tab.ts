import { Component } from "@angular/core";
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";

@Component({
  selector: 'tabs-page',
  template: `
    <ion-tabs>
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage{
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
