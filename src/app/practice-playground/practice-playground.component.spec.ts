import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticePlaygroundComponent } from './practice-playground.component';

describe('PracticePlaygroundComponent', () => {
  let component: PracticePlaygroundComponent;
  let fixture: ComponentFixture<PracticePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticePlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
