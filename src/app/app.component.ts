import { Component } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'projet-blog';

  posts = [
    {
      title: 'Mon premier post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vulputate eros, vitae eleifend ante. Etiam ullamcorper eleifend lacus. Phasellus sodales tempus iaculis.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vulputate eros, vitae eleifend ante. Etiam ullamcorper eleifend lacus. Phasellus sodales tempus iaculis.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vulputate eros, vitae eleifend ante. Etiam ullamcorper eleifend lacus. Phasellus sodales tempus iaculis.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}


