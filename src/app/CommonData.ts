import { Wish } from './wish-list/Wish';
import { Profile } from './profile/Profile';

export class CommonData {
    private _profile: Profile;
    private _wishList: Wish[];

    public get profile(): Profile {
        return this._profile;
    }

    public set profile(value: Profile) {
        this._profile = value;
    }

    public get wishList(): Wish[] {
        return this._wishList;
    }
    public set wishList(value: Wish[]) {
        this._wishList = value;
    }
}