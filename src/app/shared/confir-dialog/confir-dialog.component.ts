import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confir-dialog',
  templateUrl: './confir-dialog.component.html',
  styleUrls: ['./confir-dialog.component.css'],
  preserveWhitespaces: true,
})
export class ConfirDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {

  }

  public onSubmitClick(){
    this.dialogRef.close(true);
    
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
