import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { Visit } from '../../visit/visit';
import { VisitService } from '../../visit/visit.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  preserveWhitespaces: true,
})
export class HomeListComponent implements AfterViewInit {

  ELEMENT_DATA!: Visit[];
  displayedColumns: string[] = ['id', 'id_client', 'date', 'hour', 'status', 'details'];
  dataSource = new MatTableDataSource<Visit>(this.ELEMENT_DATA);

  constructor(
    public dialog: MatDialog,
    private service: VisitService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getAllVisits()
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

  public getAllVisits() {
    let client$ = this.service.getAll();
    client$.subscribe(clients =>
      this.dataSource.data = clients as Visit[]);
  }

  onAddClient() {
    this.router.navigate(['client/add']);
  }

  onAddVisit() {
    this.router.navigate(['visit/add']);
  }

  onUnit(id: number) {
    this.router.navigate(['visit/visituni', id]);
  }
}
