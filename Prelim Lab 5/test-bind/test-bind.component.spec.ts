import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBindComponent } from './test-bind.component';

describe('TestBindComponent', () => {
  let component: TestBindComponent;
  let fixture: ComponentFixture<TestBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
