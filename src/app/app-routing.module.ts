import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';
import { TrylahComponent } from './trylah/trylah.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'cat-listing', pathMatch: 'full' },
  { path: 'cat-listing', component: CatListComponent },
  { path: 'homePage', component: TrylahComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
