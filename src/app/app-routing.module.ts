import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListComponent } from './wish-list/wish-list.component';
import { MatTableModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatLabel, MatListModule, MatAccordion, MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WishListService } from './wish-list/wish-list.service';
import { CommonData } from './CommonData';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: 'wishList',
    component: WishListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
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
    CommonModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    WishListComponent,
    ProfileComponent
  ],
  providers: [
    WishListService,
    CommonData
  ]
})
export class AppRoutingModule { }
