import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AppUtils } from 'src/app/utils/app.utils';


const API_END_POINT_1: string = `https://reqres.in/api/users?page=1`;
const API_END_POINT_2: string = `https://reqres.in/api/users?page=2`;
const INVALID_END_POINT: string = `https://reqres-invalid.in/api/users?page=2`;

@Component({
  selector: 'ngconcept-rxjs-example-one',
  templateUrl: './rxjs-example-one.component.html',
  styleUrls: ['./rxjs-example-one.component.scss']
})
export class RxjsExampleOneComponent implements OnInit {

  users$!: Observable<any[]>;
  evenIdUsers$!: Observable<any[]>;
  oddIdUsers$!: Observable<any[]>;
  constructor() { }

  ngOnInit(): void {

    // 1. Creating & Using custom Observable
    const myHttpObservable$ = new Observable(observer => {
      fetch(API_END_POINT_2)
      .then((res: any) => {
        return res.json()
      })
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => observer.error(err))
    });

    myHttpObservable$
    .subscribe((data) => {
      console.log(data);
    });

    AppUtils.get(API_END_POINT_1)
    .subscribe((data) => {
      console.log(data)
    })

    AppUtils.get(INVALID_END_POINT)
    .subscribe((data) => console.log(data),
    (err) => console.log(err))

    // 2. Map Operator
    this.getUsersData(); // 4 http calls already being made at this point

    /**
     * 3. [PROBLEM]
     * Subscription of following 2 observables creates another 2 API calls as well 
     * 
     * Solution -> add shareReply() operatorso that it won't make another call if same obsevable gets subscribed.
     * [To reproduce the problme, comment out the shareReply Operator and then see the console]
     */
    this.evenIdUsers$ = this.users$
    .pipe(
      map(users => users.filter((user: any) => user.id%2 === 0))
    )

    this.oddIdUsers$ = this.users$
    .pipe(
      map(users => users.filter((user: any) => user.id%2 !== 0))
    )
    // End 3rd point // 6 http calls at this point.

  }

  //moved get method to AppUTils
  // public get() {

  // }

  public getUsersData(): void {
    this.users$ = AppUtils.get(API_END_POINT_1)
    .pipe(
      tap(() => console.log('API CALL MADE FOR USERS')),
      map((res: any) => res.data),
      shareReplay() // Using this -> only one http call made, for all three subscription, otherwise 2 additional calls were made.
    );
  }
}
