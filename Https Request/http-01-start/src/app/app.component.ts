import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from "./post.model";
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isFetching = false;
  loadedPosts : Post[]= [];
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
   this.errorSub  = this.postService.error.subscribe( errorMessage=>{
      this.error = errorMessage;
    })
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      posts=>{
          this.isFetching = false;
          this.loadedPosts = posts;
      }, error =>{
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePosts(postData.title,postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      posts=>{
          this.isFetching = false;
          this.loadedPosts = posts;
      }, error =>{
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }
  onHandleError(){
    this.error = null;
  }
  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(()=>{
      this.loadedPosts = [];
    })
  }
  
  ngOnDestroy(): void {
      this.errorSub.unsubscribe();
  }
}
