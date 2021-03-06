import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGaurd } from "./servers/edit-server/can-deactivate-guard.sevice";
import { ErrorComponent } from "./error/error.component";

const appRoutes: Routes =[
    { path:'', component: HomeComponent, pathMatch: 'full' },
    { path:'users', component: UsersComponent, children:[
      { path:':id/:name', component: UserComponent }
    ]},
    { path:'servers', canActivateChild:[AuthGuard] ,component: ServersComponent, children:[
      { path:':id', component: ServerComponent },
      { path:':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGaurd] }
    ]},
    //{ path:'not-found', component:PageNotFoundComponent },
    { path:'not-found', component:ErrorComponent, data:{message:'Error message is displaying :('} },
    { path:'**', redirectTo:'/not-found' }
  ]
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[RouterModule]
})
export class AppRoutingModule{

}