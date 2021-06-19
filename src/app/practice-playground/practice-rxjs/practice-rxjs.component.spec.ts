import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeRxjsComponent } from './practice-rxjs.component';

describe('PracticeRxjsComponent', () => {
  let component: PracticeRxjsComponent;
  let fixture: ComponentFixture<PracticeRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
