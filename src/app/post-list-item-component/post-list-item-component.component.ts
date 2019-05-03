import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  like(post: Post) {
      this.postService.addLoveIts(post);
  }

  dislike(post: Post) {
      this.postService.removeLoveIts(post);
  }

  onDeletePost(post: Post) {
    this.postService.deletePost(post);
  }


}
