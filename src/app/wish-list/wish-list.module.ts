import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatLabel } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishListService } from './wish-list.service';

@NgModule({
  declarations: [
    WishListModule
  ], 
  imports: [
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatLabel
  ],
  providers: [
    WishListService
  ]
  
})
export class WishListModule { }
