import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  newTitle = '';
  newContent = '';

  @Output() addPost = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    this.addPost.emit({
      title: this.newTitle,
      content: this.newContent
    });

    this.setInitial();
  }

  setInitial() {
    this.newTitle = '';
    this.newContent = '';
  }
}
