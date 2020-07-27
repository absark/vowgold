import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'myaccount',
        loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
      },
      {
        path: 'passbook',
        loadChildren: () => import('./passbook/passbook.module').then( m => m.PassbookPageModule)
      },
      {
        path: 'monthlyscheme',
        loadChildren: () => import('./monthlyscheme/monthlyscheme.module').then( m => m.MonthlyschemePageModule)
      },
      {
        path: 'update-rates',
        loadChildren: () => import('./update-rates/update-rates.module').then( m => m.UpdateRatesPageModule)
      },
      {
        path: 'razorpay',
        loadChildren: () => import('./razorpay/razorpay.module').then( m => m.RazorpayPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/main/tabs/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
