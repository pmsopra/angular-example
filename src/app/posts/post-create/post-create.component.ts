import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  title = '';
  content = '';

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm): void {
    if (form.invalid) { return; }

    this.postsService.addPost(
      form.value.title,
      form.value.content
    );

    this.setInitial(form);
  }

  // TODO Fix
  setInitial(form: NgForm): void {
    form.value.title = '';
    form.value.content = '';
  }
}
