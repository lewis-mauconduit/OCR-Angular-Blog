import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
  firstPost: Post = new Post('Post d\'exemple', 'Je serai toujours présent');

  constructor() {
    this.createNewPost(this.firstPost);
   }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (obj) => {
        if (obj === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  addLoveIts(post: Post) {
    post.loveIts ++;
    this.emitPosts();
  }

  removeLoveIts(post: Post) {
      post.loveIts --;
      this.emitPosts();
  }

}
