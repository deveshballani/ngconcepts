import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { concat, from, fromEvent, interval, merge, Observable, of } from 'rxjs';
import { concatAll, concatMap, debounceTime, exhaustMap, filter, first, mergeMap, tap } from 'rxjs/operators';
import { AppUtils } from 'src/app/utils/app.utils';

const API_END_POINT_1: string = `https://reqres.in/api/users?page=1`;
const API_END_POINT_2: string = `https://reqres.in/api/users?page=2`;
const INVALID_END_POINT: string = `https://reqres-invalid.in/api/users?page=2`;

@Component({
  selector: 'ngconcept-rxjs-example-two',
  templateUrl: './rxjs-example-two.component.html',
  styleUrls: ['./rxjs-example-two.component.scss']
})
export class RxjsExampleTwoComponent implements OnInit, AfterViewInit {

  public form!: FormGroup;
  @ViewChild('saveBtn') saveBtn!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // Some Initialization to be done - 
      this.form = new FormBuilder().group({
        name: ['', Validators.required],
        email: ['', Validators.required]
      })
    // ****


    // this.triedOneWay();
    // this.example2(); 
    // this.problematicApproach();
    // this.rightApproach();
    // this.simpleMerge();
  }

  ngAfterViewInit() {
    // this.problemWithSavingUsingSaveButton();
    this.fixSavingUsingSaveButton();
  }

  example2() {
    const oneSecDelayedObservable$ =  AppUtils.delayedStrimTill(1000, 10, '1s');
    const threeSecDelayedObservable$ =  AppUtils.delayedStrimTill(3000, 5, '3s');
    const combined$ = concat(oneSecDelayedObservable$, threeSecDelayedObservable$);
    combined$.subscribe(data => console.log(data));
  }

  triedOneWay() {
    const observable1$ = AppUtils.get(API_END_POINT_1);
    const observable2$ = AppUtils.get(API_END_POINT_2);
    const observable3$ = interval(1000);
    const combinedResult$ = concat(observable1$, observable2$, observable3$); // if there are any never ending streams of values then any concat parameter after that will not be exected
    // like if observable3$ were at second parameter then 3rd parameter observable values would never be subscribed and concatinated.
    
    combinedResult$.subscribe(data => console.log(data));

    const ob1_2$ = concat(observable1$, observable2$);
    const ob2_1$ = concat(observable2$, observable1$);
    const kuchhBhiTried$ = concat(ob1_2$, ob2_1$);
    kuchhBhiTried$.subscribe(data => console.log(data));
  }

  problematicApproach() {
    this.form.valueChanges
    .subscribe(data => {
      console.log(data)
      AppUtils.fakeSaveOperation(data)
      .subscribe((data) => {
        console.log('data saved', data);
      });
    });
  }

  rightApproach() {
    this.form.valueChanges
    .pipe(
      filter(() => this.form.valid),
      debounceTime(1000),
      concatMap((data) => AppUtils.fakeSaveOperation(data)) // prevent concurent execution, sequence of execution matters; 
    )
    .subscribe()
  }

  simpleMerge() {
    // unlike concat, merege wont wait for first observable to complete and entertain the another one as it comes.
    // if order of execution is imp then use COncatMap, and if not then mergeMap can be used. 
    const first$ = AppUtils.delayedStrimTill(1000, 10, '1s');
    const second$ = AppUtils.delayedStrimTill(3000, 5, '2s');
    const third$ = merge(first$, second$);
    third$.subscribe(data => console.log(data));

    this.form.valueChanges
    .pipe(
      filter(() => this.form.valid),
      mergeMap((data) => AppUtils.fakeSaveOperation(data)) // allows concurent execution, and sequence of execution doesnt matter; 
    )
    .subscribe()
  }
  
  problemWithSavingUsingSaveButton() {
    fromEvent(this.saveBtn.nativeElement, 'click')
    .pipe(
      filter(() => this.form.valid),
      concatMap(() => AppUtils.fakeSaveOperation(this.form.value)) // PROBLEM:  hitting the save button multiple time results into multiple save requests 
    ).subscribe()
  }

  fixSavingUsingSaveButton() {
    fromEvent(this.saveBtn.nativeElement, 'click')
    .pipe(
      filter(() => this.form.valid),
      exhaustMap(() => AppUtils.fakeSaveOperation(this.form.value)) // SOLVED: while executing one request if second comes in between then its simply ignored.
    ).subscribe()
  }

}
