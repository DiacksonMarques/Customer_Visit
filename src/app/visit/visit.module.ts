import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { VisitRoutingModule } from './visit-routing.module';
import { VisitListComponent } from './visit-list/visit-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { VisitAddComponent } from './visit-add/visit-add.component';
import { VisitAddClientComponent } from './visit-add-client/visit-add-client.component';
import { VisituniComponent } from './visituni/visituni.component';

@NgModule({
  declarations: [
    VisitListComponent,
    VisitAddComponent,
    VisitAddClientComponent,
    VisituniComponent,
  ],
  imports: [
    CommonModule,
    VisitRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [

  ],
})
export class VisitModule { }
