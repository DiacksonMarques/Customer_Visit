import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { Visit } from '../visit';
import { VisitService } from '../visit.service';
import { MatPaginator } from '@angular/material/paginator';

import { ConfirDialogComponent } from '../../shared/confir-dialog/confir-dialog.component';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements AfterViewInit {

  ELEMENT_DATA!: Visit[];
  displayedColumns: string[] = ['id', 'id_client', 'date', 'hour', 'status', 'details', 'update', 'delete'];
  dataSource = new MatTableDataSource<Visit>(this.ELEMENT_DATA);
  isLoadingResults = true;

  constructor(
    public dialog: MatDialog,
    private service: VisitService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
  ) {
    this.getLoading()
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

  getLoading() {
    this.getAllVisits();
    this.isLoadingResults = false;
  }

  getAllVisits() {
    let visit = this.service.getAll();
    visit.subscribe(visits => this.dataSource.data = visits as Visit[]);
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onAdd() {
    this.router.navigate(['visit/add']);
  }

  onDelete(visit: Visit): void {
    const dialogRef = this.dialog.open(ConfirDialogComponent, {
      width: '350px',
      data: 'Deseja deletar o registro',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.setDelete(visit).subscribe(
          success => {
            this._snackBar.open('Visita excluida com sucesso', 'Ok', {
              duration: 5000,
            });
            location.reload();
          },
          error => {
            this._snackBar.open('Erro ao excluir visita. Tente novamente!', 'Ok', {
              duration: 5000,
            });
          },
        );
      }
    });
  }

  onUnit(id: number) {
    this.router.navigate(['visituni', id], { relativeTo: this.route });
  }

}
