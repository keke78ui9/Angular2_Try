import {Component} from '@angular/core';

const NAMES : Names[] = [
{ id: 1, firstname: 'hi'},
{ id: 2, firstname: 'hi2'},
{ id: 3, firstname: 'hi3'},
{ id: 4, firstname: 'hi4'},
{ id: 5, firstname: 'hi5'},
{ id: 6, firstname: 'hi6'}
];
//1.
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{name.firstname}} man!</h2>
    <h3>{{name.id}}</h3>
    <div>
    	<label>name: </label>
    	<input [(ngModel)]="name.firstname" placeholder="name">
    </div>
    <h2>My Heroes</h2>
	<ul class="heroes">
	 <li *ngFor="let name of names">
	 	<span class="badge">{{name.id}}</span> {{name.firstname}}
	</ul>
    `
})
//3.
export class AppComponent {
	title = 'hi yo';
	names: NAMES
}

//2.
export class Name {
	id: number;
	firstname: string;
}