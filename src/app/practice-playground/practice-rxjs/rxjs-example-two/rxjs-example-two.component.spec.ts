import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExampleTwoComponent } from './rxjs-example-two.component';

describe('RxjsExampleTwoComponent', () => {
  let component: RxjsExampleTwoComponent;
  let fixture: ComponentFixture<RxjsExampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsExampleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
