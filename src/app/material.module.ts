import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {  
  MatSortModule,
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatGridTile,
  MatListModule,
  MatNavList,
  MatListItem,
  MatFormFieldModule,
  MatIconModule,
  MatIcon,
  MatToolbarModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule
} from '@angular/material'

import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

//import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule],
  exports: [
    MatSlideToggleModule,
    MatSortModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule]
})

export class MaterialModule { }