import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { privateRouteGuard } from './guards/private-route.guard';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'form', component: PostFormComponent, canActivate: [privateRouteGuard] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
