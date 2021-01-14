import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClientService } from '../client.service';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfirDialogComponent } from '../../shared/confir-dialog/confir-dialog.component';

export class ClientListComponentDialog { }

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements AfterViewInit {
  ELEMENT_DATA!: Client[];
  displayedColumns: string[] = ['id', 'name', 'phone', 'preferential', 'detalhes', 'update', 'delete'];
  dataSource = new MatTableDataSource<Client>(this.ELEMENT_DATA);

  constructor(
    public dialog: MatDialog,
    private service: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,

  ) {
    this.getAllClients();
  }

  openDialogconfirm(client: Client): void {
    const dialogRef = this.dialog.open(ConfirDialogComponent, {
      width: '350px',
      data: 'Deseja deletar o registro?',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.setDelete(client).subscribe(
          success => {
            this._snackBar.open('Usuário excluido com sucesso', 'Ok', {
              duration: 5000,
            });
            location.reload();
          },
          error => {
            this._snackBar.open('Erro ao excluir usuário. Tente novamente!', 'Ok', {
              duration: 5000,
            });
          },
        );
      }
    });
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

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onUnit(id: number) {
    this.router.navigate(['clientuni', id], { relativeTo: this.route });
  }

  onAdd() {
    this.router.navigate(['client/add']);
  }
}
