import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLoveIts: number;
	@Input() postCreatedAt: string;

  constructor() { }

  ngOnInit() {
  }
	
	loveIt() {
		this.postLoveIts++;
	}
	
	dontLoveIt() {
		this.postLoveIts--;
	}
}
