import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  private postsSub: Subscription;
  @ViewChild('accordion') accordion: MatAccordion;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();

    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  openAll() {
    this.accordion.openAll();
  }

  closeAll() {
    this.accordion.closeAll();
  }
}
