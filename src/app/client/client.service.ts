import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../shared/curd-service';
import { environment } from 'src/environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends CrudService<Client> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}client`);
  }
}
