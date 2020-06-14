import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin-page',
    loadChildren: () => import('./signin-page/signin-page.module').then( m => m.SigninPagePageModule)
  },
  {
    path: 'signup-page',
    loadChildren: () => import('./signup-page/signup-page.module').then( m => m.SignupPagePageModule)
  },
  {
    path: 'resetpassword-page',
    loadChildren: () => import('./resetpassword-page/resetpassword-page.module').then( m => m.ResetpasswordPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
