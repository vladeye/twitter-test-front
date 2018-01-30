import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TweetsComponent } from './tweets/tweets.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'twitters',
    pathMatch: 'full'
  },
  {
    path: 'twitters',
    component: TweetsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
