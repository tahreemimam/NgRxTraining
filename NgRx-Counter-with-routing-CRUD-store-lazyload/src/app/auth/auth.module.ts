import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './state/auth.selector';
import { AuthReducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login',  pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    EffectsModule.forFeature([]),
    // StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer) ,
    RouterModule.forChild(routes)],
})
export class AuthModule {}
