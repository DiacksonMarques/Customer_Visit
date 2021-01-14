import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientuni',
  templateUrl: './clientuni.component.html',
  styleUrls: ['./clientuni.component.css']
})
export class ClientuniComponent {

  client_type!: string;
  preferential!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.onNames()
  }

  client = this.route.snapshot.data['client'];



  phone_exi = `(${this.client.phone.area}) ${this.client.phone.exchange} - ${this.client.phone.exchange}`;
  person_phone = `(${this.client.person.person_phone.area}) ${this.client.person.person_phone.exchange} - ${this.client.person.person_phone.exchange}`;

  onNames() {
    if (this.client.type_client == 0) {
      this.client_type = 'Físico';
    } else {
      this.client_type = 'Jurídico'
    }

    if (this.client.preferential == 0) {
      this.preferential = 'Sim';
    } else {
      this.preferential = 'Não'
    }
  }

  onVolt() {
    this.router.navigate(['client']);
  }

}
