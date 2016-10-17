import {Component} from '@angular/core';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {TechsComponent} from './techs/techs';
import {FooterComponent} from './footer';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'fountain-app',
  template: require('./main.html'),
  directives: [HeaderComponent, TitleComponent, TechsComponent, FooterComponent]
})


export const firebaseConfig = {
  apiKey: 'XXX',
  authDomain: 'XXX',
  databaseURL: 'XXX',
  storageBucket: 'XXX'
};


firebase.initializeApp(firebaseConfig)



export class MainComponent {

  constructor() {




  }



}
