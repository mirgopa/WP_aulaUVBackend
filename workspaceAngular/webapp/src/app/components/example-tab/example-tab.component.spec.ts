import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTabComponent } from './example-tab.component';

describe('ExampleTabComponent', () => {
  let component: ExampleTabComponent;
  let fixture: ComponentFixture<ExampleTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
