import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { autoLogout, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { state } from "@angular/animations";

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action)=>{
        return {
            ...state,
            user: action.user
        }
    }),
    on(signupSuccess, (state,action) => {
        return{
            ...state,
            user: action.user
        }
    }),
    on(autoLogout, (state,action) => {
        return{
            ...state,
            user : null
        }
    })
)

export function AuthReducer(state,action){
    return _authReducer(state,action)
}