import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }


}
