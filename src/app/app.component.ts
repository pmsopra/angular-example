import { Component } from '@angular/core';

interface Post {
  title: string;
  content: string;
}

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
    },
    {
      title: 'Some third title',
      content: 'Some third description',
    }
  ];

  public addPost(newPost: Post) {
    const posts = [...this.posts];
    posts.push(newPost);

    this.posts = posts;
  }
}
