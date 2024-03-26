import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeChannelName, customIncreement, decreement, increement, reset } from "./counter.actions";

const _counterReducer = createReducer(
    initialState,
    on(increement, (state) => {
        return{
            ...state,
            counter: state.counter+1,
        }
    }),on(decreement, (state)=>{
        return{
            ...state,
            counter: state.counter-1
        }
    }),on(reset, (state)=>{
        return{
            ...state,
            counter: 0
        }
    }),on(customIncreement, (state, action) =>{
        console.log(action)
        return{
            ...state,
            counter: state.counter + action.count
        }
    }),on(changeChannelName, (state) => {
        return{
            ...state,
            channelName: 'Modified Leela Web Dev'
        }
    })
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}