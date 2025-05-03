import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WipComponent } from './work-in-progress/wip.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'wip', component: WipComponent },
  { path: '', redirectTo: '/wip', pathMatch: 'full' },
  { path: '**', redirectTo: '/wip' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
