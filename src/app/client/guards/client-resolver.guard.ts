import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Client> {

  constructor(
    private service: ClientService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }

    return of({
        id:null,
        name: null,
        phone: null,
        type_client:null,
        preferential:null,
        person:{
          person_name: null,
          person_phone: null,
        },
        address:{
         cep:null,
         number: null,
         complement: null,
         street: null,
         neighborhood: null,
         state: null,
        }
    });
  }
}
