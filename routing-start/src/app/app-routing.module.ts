import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard-service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ]
  },

  { path: 'servers',
    // canActivate: [AuthGuard],      // Protect the head component
    canActivateChild: [AuthGuard],   // Protect the childs
    component: ServersComponent ,
    children: [
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }
  ]
  },
  // para redireccionar el empty =''
  // { path: '', redirectTo: '/not-found', pathMatch: 'full' },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'page not found' } },
  // Debe de ir de ultimo y atrapa todas las url que no existen
  {path: '**',  redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {useHash: true})  // Para cuando hay problema con la ruta en el server en el index.html
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
