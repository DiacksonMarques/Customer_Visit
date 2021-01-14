import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { VisitService } from '../visit.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.component.html',
  styleUrls: ['./visit-add.component.css']
})
export class VisitAddComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private service: VisitService,
    private location: Location,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const visit = this.route.snapshot.data['visit'];
    if (environment.id_client != 0) {
      visit.id_client = environment.id_client;
      visit.name_client = environment.name_client;
    }
    console.log(visit.id_client);
    this.form = this.fb.group({
      id: [visit.id],
      id_client: [visit.id_client, [Validators.required]],
      name_client: [visit.name_client, [Validators.required]],
      date: [visit.date, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      hour: [visit.hour, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      reason_client: [visit.reason_client, [Validators.minLength(5), Validators.maxLength(250)]],
      visit_status: [visit.visit_status, [Validators.required]],
      visit_result: [visit.visit_result, [Validators.minLength(5), Validators.maxLength(250)]],
    });
  }

  hasError(field: string) {
    return this.form?.get(field)?.errors;
  }

  onSubmit() {
    if (this.form?.valid) {
      let msgSuccess: string = 'Visita criada com successo';
      let msgError: string = 'Error ao criar visita, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Visita atualizada com successo';
        msgError = 'Error ao atualizar visita, tente novamente!';
      }

      this.service.setSave(this.form.value).subscribe(
        success => {
          this._snackBar.open(msgSuccess, 'Seguir', {
            duration: 5000,
          });
          this.router.navigate(['visit']);
        },
        error => {
          this._snackBar.open(msgError, 'Seguir', {
            duration: 5000,
          });
          this.router.navigate(['visit']);
        },
      )
    }
  }
}
