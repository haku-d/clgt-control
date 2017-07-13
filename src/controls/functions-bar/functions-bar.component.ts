import {Component} from '@angular/core';

@Component({
    selector: 'functions-bar',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class FunctionsBarComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);

    }

}