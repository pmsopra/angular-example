import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  title = '';
  content = '';

  @Output() addPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(form: NgForm): void {
    if (form.invalid) { return; }

    this.addPost.emit({
      title: form.value.title,
      content: form.value.content
    });

    this.setInitial(form);
  }

  // TODO Fix
  setInitial(form: NgForm): void {
    form.value.title = '';
    form.value.content = '';
  }
}
