import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonData } from '../CommonData';
import { Observable, of } from 'rxjs';
import { Wish } from './Wish';

@Injectable()
export class WishListService {

    constructor(private httpClient: HttpClient, private commonData: CommonData){};

    newWish: Wish;

    public getWishList(): Observable<Wish[]> {
        return of(this.commonData.wishList);
    }

    public addWish(newWishForm: any): Observable<any> {
        this.newWish = new Wish(); 
        this.newWish.type = newWishForm.type;
        this.newWish.brand = newWishForm.brand;
        this.newWish.description = newWishForm.description;
        this.newWish.quantity = newWishForm.quantity;
        this.newWish.budget = newWishForm.budget;
        this.newWish.targetDate = newWishForm.targetDate;

        this.commonData.wishList.push(this.newWish);
        return of(true);
    }

}