import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})

export class MessageDialogComponent {

  message: any

  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
    this.message = data.error
  }

  onNoClick(): void {
    this.dialogRef.close();    
  }

  resume(){    
    this.dialogRef.close();
  }

}