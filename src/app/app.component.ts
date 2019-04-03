import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  
  posts = [{
		title: "Mon premier post",
		content: "Voici mon premier post ! Bonne année 2019 !!",
		loveIts: 1,
		created_at: "2019-01-01T00:00:01.000Z"
	}, {
		title: "Mon deuxième post",
		content: "C'est pas un super post... Lendemain de cuite quoi !",
		loveIts: -1,
		created_at: "2019-01-01T10:00:00.000Z"
	}, {
		title: "Mon dernier post",
		content: "Pour finir, le dernier post ! Retour au présent, enfin !!",
		loveIts: 0,
		created_at: "2019-04-03T15:00:00.000Z"
	}];
}
