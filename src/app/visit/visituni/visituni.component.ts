import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visituni',
  templateUrl: './visituni.component.html',
  styleUrls: ['./visituni.component.css']
})
export class VisituniComponent {

  status!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  visit = this.route.snapshot.data['visit'];

  onVolt() {
    this.router.navigate(['visit']);
  }

}
