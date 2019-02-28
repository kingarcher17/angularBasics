import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';
import { CommonData } from '../CommonData';
import { Wish } from './Wish';
import { WishListService } from './wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private fb: FormBuilder, private commonData: CommonData, private wishListService: WishListService){};

  wishlistTableHeaders: string[] = ["Type", "Brand", "Description", "Quantity", "Budget", "TargetDate"];
  wishListData: Wish[];
  wishlist: BehaviorSubject<Wish[]>;
  newWishForm: FormGroup;
  newWish: Wish;
  typeOptions: string[];
  budgetOptions: string[];
  qtyOptions: string[];

  ngOnInit() {
    this.initializeAddForm();
    this.initializeData();
  }

  initializeData() {
    this.typeOptions = ['toy', 'shoe', 'video'];
    this.budgetOptions = ['$10', '$20', '$30'];
    this.qtyOptions = ['1', '2', '3'];
    this.wishListData =  [{type:"toy", brand:"Mattel", description:"green Vw beetle", quantity:"1", budget:"20", targetDate:"11/20/2019"},
    {type:"toy", brand:"Bburago", description:"Harlequin Vw beetle", quantity:"2", budget:"50", targetDate:"10/20/2019"},
    ];
    this.wishlist = new BehaviorSubject(Wish[1]);
    this.wishlist.next(this.wishListData); 
    this.commonData.wishList = this.wishlist.value;
  }

  initializeAddForm() {
    this.newWishForm  =  this.fb.group({
      type: new FormControl(''),
      brand: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(''),
      budget: new FormControl(''),
      targetDate: new FormControl('')
    });
  }

  getWishList() {
    this.wishListService.getWishList().subscribe((result: Wish[]) => {
      //this.wishlist = result;
    }, 
    error => {

    })
  }

  addNewWish() {
    this.wishListService.addWish(this.newWishForm.value).subscribe((result: Wish[]) => {
        if (result) {
          this.wishlist.next(this.commonData.wishList);
        }
    }, 
    error => {

    });
  }

}
