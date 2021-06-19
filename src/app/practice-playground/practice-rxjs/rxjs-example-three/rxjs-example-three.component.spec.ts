import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExampleThreeComponent } from './rxjs-example-three.component';

describe('RxjsExampleThreeComponent', () => {
  let component: RxjsExampleThreeComponent;
  let fixture: ComponentFixture<RxjsExampleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsExampleThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsExampleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
