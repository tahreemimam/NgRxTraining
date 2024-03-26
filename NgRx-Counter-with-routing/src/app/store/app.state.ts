import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { PostsState } from "../post/state/posts.actions";
import { postsReducer } from "../post/state/posts.reducer";

export interface AppState {
    counter: CounterState;
    posts: PostsState;
}

export const AppReducer = {
    counter: counterReducer,
    posts: postsReducer
}