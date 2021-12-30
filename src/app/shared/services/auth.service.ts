import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
//import { environment } from '../environments/environment';
import { CurrentUser } from '../models/CurrentUser';

@Injectable()
export class AuthService {
  private isLoggedin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private urlEndpoint: string;
  private token: string = '';
  private subscription: any;
  private currentUser: CurrentUser = new CurrentUser('', '', '');
  private currentUserSubject: BehaviorSubject<CurrentUser> =
    new BehaviorSubject(this.currentUser);

  constructor(private http: HttpClient, private router: Router) {
    this.urlEndpoint = 'api';
    this.isLoggedin = new BehaviorSubject<boolean>(false);
  }

  authenticate(data: any) {
    this.subscription = this.http
      .post(`${this.urlEndpoint}/authenticate`, data)
      .pipe(
        map((res) => {
          this.setCurrentUser(res);
          return res;
        }),
        shareReplay()
      )
      .subscribe((data) => {
        data ? this.isLoggedin.next(true) : this.isLoggedin.next(false);
      });
  }
  setCurrentUser(user: any) {
    this.currentUser = new CurrentUser(
      user.userId,
      user.firstName,
      user.lastName
    );
    this.currentUserSubject.next(this.currentUser);
    this.token = user?.jwt;
  }

  getCurrentUser = () => this.currentUser;
  getCurrentUserSubscription = (): Observable<CurrentUser> => {
    return this.currentUserSubject.asObservable();
  };

  removeUser() {
    this.isLoggedin.next(false);
    this.setCurrentUser({ firstName: '', lastName: '', userId: '' });
    this.token = '';
    this.router.navigate(['login']);
  }

  get authentication(): Observable<boolean> {
    return this.isLoggedin.asObservable();
  }
  getToken() {
    return this.token;
  }

  register(userData: any): any {
    return this.http
      .post(this.urlEndpoint + '/user-api/users/register', userData)
      .pipe(
        map((res) => {
          // this.notificationService.setmessage("User has been successfully registered");
          // this.loaderService.changeLoadingState(false);
          return res;
        })
      );
  }
}
