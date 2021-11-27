import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifehookComponent } from './lifehook/lifehook.component';
import { LoginComponent } from './login/login.component';
import { LoginrevComponent } from './loginrev/loginrev.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistComponent } from './regist/regist.component';
import { TemplatedriveFormComponent } from './templatedrive-form/templatedrive-form.component';

// { path:'admindahboard' ,component: HomeComponent},
// { path: 'lazymodule', component:CompoListAllComponent },
// { path: 'lazymodule', loadChildren: './lazymodule/lazymodule.module#LazyModuleModule' },
const routes: Routes = [
  { path:'home',component: HomeComponent},
  { path:'login',component: LoginComponent},
  { path:'login_revi',component: LoginrevComponent},
  { path:'registration' ,pathMatch: 'full',component: RegistComponent},
  { path:'templatedriv' ,component: TemplatedriveFormComponent},
  { path:'reactiveform' ,component: ReactiveFormComponent},
  { path:'lifecycle' ,component: LifehookComponent},
  
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

  { path:'logout' ,component: LogoutComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
