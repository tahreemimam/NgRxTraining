import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../post/state/posts.reducer";
import { PostsState } from "../post/state/posts.state";

export interface AppState {
    counter: CounterState;
    posts: PostsState;
}

export const AppReducer = {
    counter: counterReducer,
    posts: postsReducer
}