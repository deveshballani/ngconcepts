import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExampleOneComponent } from './rxjs-example-one.component';

describe('RxjsExampleOneComponent', () => {
  let component: RxjsExampleOneComponent;
  let fixture: ComponentFixture<RxjsExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsExampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
