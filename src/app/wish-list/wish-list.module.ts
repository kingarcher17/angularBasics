import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatLabel } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishListService } from './wish-list.service';
import { WishListComponent } from './wish-list.component';
import { CommonData } from '../CommonData';

@NgModule({
  declarations: [
    WishListComponent
  ], 
  imports: [
   CommonModule
  ],
  providers: [
    WishListService,
    CommonData
  ]
})
export class WishListModule { }
