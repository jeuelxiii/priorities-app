import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';

const routes: Routes = [
  { path: 'home', component: ListComponent},
  { path: 'about', component: AboutAppComponent },
  { path: 'how-to-use', component: HowToUseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
