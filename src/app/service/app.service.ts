import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    users = [
        { name: 'Edwin' },
        { name: 'Ariel' },
        { name: 'Rahma' }
    ]

    constructor() { }

    getUsers(): Observable<any[]> {
        return of(this.users);
    }

    addUser(name: string) {
        // this.users = [...this.users, { name }];
        this.users = this.users.concat({ name });
    }
}