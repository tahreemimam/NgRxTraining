import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts$: Observable<Post[]>
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }
  onDelete(id: string) {
    if(confirm("Are you sure you want to delete")) {
      this.store.dispatch(deletePost({id}))
    }
  }
}
