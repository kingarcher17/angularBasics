import { Wish } from './wish-list/Wish';

export class CommonData {
    private _wishList: Wish[];

    public get wishList(): Wish[] {
        return this._wishList;
    }
    public set wishList(value: Wish[]) {
        this._wishList = value;
    }
}