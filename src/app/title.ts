import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'fountain-title',
  template: require('./title.html')
})
export class TitleComponent {


  constructor () {
    console.log('Title Component constructed!');
  }

  roomButtonClicked(roomType) {
    console.log('hello');
    console.log('this');
    // this.router.navigate(['/cypher']);
  }



}
