import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientuniComponent } from './clientuni/clientuni.component';

import { CursoResolverGuard } from './guards/client-resolver.guard';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'add', component: ClientAddComponent, resolve: { client: CursoResolverGuard } },
  { path: 'editar/:id', component: ClientAddComponent, resolve: { client: CursoResolverGuard } },
  { path: 'clientuni/:id', component: ClientuniComponent, resolve: { client: CursoResolverGuard } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
