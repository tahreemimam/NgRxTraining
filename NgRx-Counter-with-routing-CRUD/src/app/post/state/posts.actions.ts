import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/model/posts.model";

export const ADD_POST_ACTION = '[posts page] add post';
export const addPost = createAction(ADD_POST_ACTION,props<{post: Post}>())

export const UPDATE_POST_ACTION = '[posts page] update post';
export const updatePost = createAction(UPDATE_POST_ACTION,props<{post: Post}>())

export const DELETE_POST_ACTION = '[posts page] delete post';
export const deletePost = createAction(DELETE_POST_ACTION,props<{id: string}>())