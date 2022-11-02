import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	showOptionsList : boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	onPressedOptions() : void {
		this.showOptionsList = !this.showOptionsList;
		console.log('Pressed');
	}

	onPressedCover () : void {
		this.showOptionsList = !this.showOptionsList;
	}
}
