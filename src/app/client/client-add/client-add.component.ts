import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css'],
  preserveWhitespaces: true,
})
export class ClientAddComponent implements OnInit {

  form!: FormGroup;
  type_message!: string;

  constructor(
    private fb: FormBuilder,
    private service: ClientService,
    private location: Location,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const client = this.route.snapshot.data['client'];

    if (client.id == null) {
      this.type_message = 'Cadastrar Cliente';
    } else {
      this.type_message = 'Alterar Cliente'
    }

    this.form = this.fb.group({
      id: [client.id],
      name: [client.name, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      phone: [client.phone, [Validators.required, Validators.minLength(14)]],
      type_client: [client.type_client, [Validators.required]],
      preferential: [client.preferential, [Validators.required]],
      person: this.fb.group({
        person_name: [client.person.person_name, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
        person_phone: [client.person.person_phone, [Validators.required, Validators.minLength(14)]],
      }),
      address: this.fb.group({
        cep: [client.address.cep, [Validators.required, Validators.minLength(1), Validators.maxLength(8)]],
        number: [client.address.number, [Validators.required]],
        complement: [client.address.complement],
        street: [client.address.street, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
        neighborhood: [client.address.neighborhood, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
        state: [client.address.state, [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
      })
    });
  }

  hasError(field: string) {
    return this.form?.get(field)?.errors;
  }

  onSubmit() {
    if (this.form?.valid) {
      let msgSuccess: string = 'Cliente criado com successo';
      let msgError: string = 'Error ao criar cliente, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Cliente atualizado com successo';
        msgError = 'Error ao atualizar cliente, tente novamente!';
      }

      this.service.setSave(this.form.value).subscribe(
        success => {
          this._snackBar.open(msgSuccess, 'Fechar', {
            duration: 5000,
          });
          this.router.navigate(['client']);
        },
        error => {
          this._snackBar.open(msgError, 'Fechar', {
            duration: 5000,
          });
          this.router.navigate(['client']);
        },
      )
    }
  }


  onCancel() {
    this.router.navigate(['client']);
  }
}
