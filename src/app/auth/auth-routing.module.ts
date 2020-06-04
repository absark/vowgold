import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path:'',
    component:AuthPage,
    children:[
      {
        path: 'signup',
        loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
      },
      {
        path: '',
        redirectTo: '/auth/signup',
        pathMatch: 'full'
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
