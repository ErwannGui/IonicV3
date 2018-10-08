import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, year: number, icon: string, image: string}>;
  films: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

    this.getFilms();

    this.items = [];
    
    for (let i = 1; i <= 10; i++) {
      this.items.push({
        title: films[i].title,
        year: films[i].year,
        image: films[i].poster,
        icon: 'film'
      });
    }
  }

  getFilms() {
    this.restProvider.getFilms()
    .then(data => {
      this.films = data['search'];
      console.log(this.films);
    });
  }

  itemTapped(event, film) {
    this.navCtrl.push(ItemDetailsPage, {
      film: film
    });
  }
}
