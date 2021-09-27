
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import(
    './home/home.module'
  ).then(m => m.HomeModule), pathMatch: 'full'},
  {
    path: 'episode',
    loadChildren: () => import(
      './episode-page/episode-page.module'
    ).then(m => m.EpisodePageModule)
  },
  {
    path: 'wish-list',
    loadChildren: () => import(
      './wish-list/wish-list.module'
    ).then(m => m.WishListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
