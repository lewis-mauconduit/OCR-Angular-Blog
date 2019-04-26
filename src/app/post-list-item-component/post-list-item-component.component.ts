import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postName: string;
  @Input() postContent: string;
  @Input() createdAt: Date;
  @Input() loveIts: number;

  constructor() { }

  ngOnInit() {
  }

  addLoveIts() {
      this.loveIts ++;
  }

  removeLoveIts() {
      this.loveIts --;
  }

}
