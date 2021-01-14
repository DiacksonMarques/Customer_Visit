import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ClientService } from '../../client/client.service';
import { Client } from '../../client/client';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visit-add-client',
  templateUrl: './visit-add-client.component.html',
  styleUrls: ['./visit-add-client.component.css']
})
export class VisitAddClientComponent implements AfterViewInit {
  ELEMENT_DATA!: Client[];
  displayedColumns: string[] = ['id', 'name', 'phone', 'detalhes'];
  dataSource = new MatTableDataSource<Client>(this.ELEMENT_DATA);

  constructor(
    public dialog: MatDialog,
    private service: ClientService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.getAllClients();
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getAllClients() {
    let client = this.service.getAll();
    client.subscribe(clients => this.dataSource.data = clients as Client[]);
  }

  onData(id: number, name: string) {
    console.log(id);
    console.log(name);
    environment.id_client = id;
    environment.name_client = name;
    this.router.navigate(['addconfirm'], { relativeTo: this.route });
  }
}
