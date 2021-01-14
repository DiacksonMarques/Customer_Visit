import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../shared/curd-service';
import { environment } from 'src/environments/environment';
import { Visit } from './visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService extends CrudService<Visit> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}visit`);
  }
}
