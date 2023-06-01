import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'center',
    loadChildren: () => import('./test-center/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./test-center/class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./test-center/subjects/subjects.module').then( m => m.SubjectsPageModule)
  },
  {
    path: 'scheme',
    loadChildren: () => import('./test-center/scheme/scheme.module').then( m => m.SchemePageModule)
  },
  {
    path: 'test-type',
    loadChildren: () => import('./test-center/test-type/test-type.module').then( m => m.TestTypePageModule)
  },
  {
    path: 'instruction',
    loadChildren: () => import('./test-center/instruction/instruction.module').then( m => m.InstructionPageModule)
  },
  {
    path: 'test/:id',
    loadChildren: () => import('./test-center/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'activate',
    loadChildren: () => import('./activate/activate.module').then( m => m.ActivatePageModule)
  },
  {
    path: 'subject',
    loadChildren: () => import('./subjects/subjects.module').then( m => m.SubjectsPageModule)
  },
  {
    path: 'take-test',
    loadChildren: () => import('./take-test/take-test.module').then( m => m.TakeTestPageModule)
  },
  {
    path: 'cbt',
    loadChildren: () => import('./cbt/cbt.module').then( m => m.CbtPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
