import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirDialogComponent } from './confir-dialog/confir-dialog.component';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
  ConfirDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
  ],
  exports: [

  ],
  entryComponents: [
    ConfirDialogComponent
  ],
})
export class SharedModule { }
