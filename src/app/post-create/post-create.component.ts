import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  newPostByReference = '';
  newPostByNgModel = '';

  constructor() { }

  ngOnInit() {
  }

  onAddPostByReference(postInput: HTMLTextAreaElement) {
    console.dir(postInput);
    this.newPostByReference = postInput.value;
  }
}
