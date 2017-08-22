import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";
import {AuthGuard} from "./auth/auth-guard.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
