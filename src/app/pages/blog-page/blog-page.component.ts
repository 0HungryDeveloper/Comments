import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-blog-page',
	templateUrl: './blog-page.component.html',
	styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

	comments = [1,2,3,4]

	constructor() { }

	ngOnInit(): void {
	}

}
