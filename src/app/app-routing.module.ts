import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stripe',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'monthlyscheme',
    loadChildren: () => import('./monthlyscheme/monthlyscheme.module').then( m => m.MonthlyschemePageModule)
  },
 
  {
    path: 'stripe',
    loadChildren: () => import('./stripe/stripe.module').then( m => m.StripePageModule)
  },
  {
    path: 'passbook',
    loadChildren: () => import('./passbook/passbook.module').then( m => m.PassbookPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
