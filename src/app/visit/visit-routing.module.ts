import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitListComponent } from './visit-list/visit-list.component';
import { VisitAddComponent } from './visit-add/visit-add.component';
import { VisitAddClientComponent } from './visit-add-client/visit-add-client.component';
import { VisituniComponent } from './visituni/visituni.component';

import { VisitResolverGuard } from './guards/visit-resolver.guard';


const routes: Routes = [
  { path: '', component: VisitListComponent },
  { path: 'add', component: VisitAddClientComponent, resolve: { visit: VisitResolverGuard } },
  { path: 'add/addconfirm', component: VisitAddComponent, resolve: { visit: VisitResolverGuard } },
  { path: 'editar/:id', component: VisitAddComponent, resolve: { visit: VisitResolverGuard } },
  { path: 'visituni/:id', component: VisituniComponent, resolve: { visit: VisitResolverGuard } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule { }
