import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngconcept-practice-playground',
  templateUrl: './practice-playground.component.html',
  styleUrls: ['./practice-playground.component.scss']
})
export class PracticePlaygroundComponent implements OnInit {

  public allPracticeItems$!: Observable<any[]>;

  constructor() { }

  ngOnInit(): void {
    this.initPraccticeItems();
  }

  private initPraccticeItems(): void {
    this.allPracticeItems$ = of([
      {
        name: 'RxJS',
        routePath: '/practice/rxjs',
        desc: 'Click to know see RxJS practiced content'
      }
    ])
  }

}
