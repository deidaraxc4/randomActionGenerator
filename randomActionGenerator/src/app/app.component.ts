import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doAction : string;
  actions : string[];
  bodyParts : string[];

  constructor() {
    this.actions = [
      "bite","sniff","lick"
    ];
    this.bodyParts = [
      "arm","knee","elbow"
    ];

  }

  addAction(x : string) {
    if(x) {
      this.actions.push(x);
    }
  }

  addBodyPart(x : string) {
    if(x) {
      this.bodyParts.push(x);
    }
  }

  randomNum(array : string[]) {
      return Math.floor(Math.random() * array.length)
  }

  randomAction(x : number, y : number) {
    this.doAction = this.actions[this.randomNum(this.actions)] + " " + this.bodyParts[this.randomNum(this.bodyParts)];
  }

}
