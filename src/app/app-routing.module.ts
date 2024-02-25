import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchResultComponent } from './searchresult/searchresult.component';
import { SearchplaceComponent } from './searchplace/searchplace.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'searchplace', component: SearchplaceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
