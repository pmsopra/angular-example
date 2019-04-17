import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  newTitle = '';
  newContent = '';

  @Output() addPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(): void {
    this.addPost.emit({
      title: this.newTitle,
      content: this.newContent
    });

    this.setInitial();
  }

  setInitial(): void {
    this.newTitle = '';
    this.newContent = '';
  }
}
