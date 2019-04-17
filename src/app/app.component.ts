import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Some title',
      content: 'Some description',
    },
    {
      title: 'Some second title',
      content: 'Some second description',
    }
  ];

  public addPost(newPost: Post): void {
    this.posts.push(newPost);
  }
}
