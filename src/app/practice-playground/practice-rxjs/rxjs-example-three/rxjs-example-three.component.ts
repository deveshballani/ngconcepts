import { Component, OnInit } from '@angular/core';
import { AppUtils } from 'src/app/utils/app.utils';

const API_END_POINT_1: string = `https://reqres.in/api/users?page=1`;


@Component({
  selector: 'ngconcept-rxjs-example-three',
  templateUrl: './rxjs-example-three.component.html',
  styleUrls: ['./rxjs-example-three.component.scss']
})
export class RxjsExampleThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.exampleOfCancellableRequest();
  }

  exampleOfCancellableRequest() {
    const request$ = AppUtils.cancellableGetRequest(API_END_POINT_1);
    const subscription = request$.subscribe((data) => console.log(data));
    console.log(subscription);
    setTimeout(() => subscription.unsubscribe(), 0); // this cancels the request immediately 
  }
}
