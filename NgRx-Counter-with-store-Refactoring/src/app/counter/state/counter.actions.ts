import { createAction, props } from "@ngrx/store";

export const increement = createAction('increement');
export const decreement = createAction('decreement');
export const reset = createAction('reset');

export const customIncreement = createAction(
    'customIncreement',
    props<{count: number}>()
)

export const changeChannelName = createAction('changeChannelName');