import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Visit } from '../visit';
import { VisitService } from '../visit.service';

@Injectable({
  providedIn: 'root'
})
export class VisitResolverGuard implements Resolve<Visit> {

  constructor(
    private service: VisitService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Visit> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }

    return of({
      id:null,
      date:null,
      hour:null,
      reason_client:null,
      visit_status:null,
      visit_result:null,
      id_client:null,
      name_client: null,
    });
  }
}
