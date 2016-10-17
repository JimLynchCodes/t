import {Component} from '@angular/core';
// import {HeaderComponent} from './header';
// import {TitleComponent} from './title';
// import {TechsComponent} from './techs/techs';
// import {FooterComponent} from './footer';


import './cypher-room.scss';

@Component({
  selector: 'cypher-room',
  template: require('./cypher-room.html'),
  directives: []
})
export class CypherRoomComponent {


  constructor () {

    console.log('cypher room component created.');

    this.authenicateAsGuest();

  }

  private authenicateAsGuest() {
    
    
    
  }



}
