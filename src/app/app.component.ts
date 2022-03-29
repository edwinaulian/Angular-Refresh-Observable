import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/app.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name: string;
  users$: Observable<Array<{ name: string }>>

  refreshUsers$ = new BehaviorSubject<boolean>(true);

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.users$ = this.refreshUsers$.pipe(switchMap(_ => this.getUser()));
  }

  getUser() {
    return this.apiService.getUsers();
  }

  addUser() {
    this.apiService.addUser(this.name);
    this.name = "";
    this.refreshUsers$.next(true);
  }

}
