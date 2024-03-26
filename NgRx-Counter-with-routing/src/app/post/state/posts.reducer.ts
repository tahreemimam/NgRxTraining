import { createReducer } from "@ngrx/store";
import { initialState } from "./posts.actions";

const _postsReducer = createReducer(initialState)

export function postsReducer(state, action) {
    return _postsReducer(state, action);
}