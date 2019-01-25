import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2TabComponent } from './example2-tab.component';

describe('Example2TabComponent', () => {
  let component: Example2TabComponent;
  let fixture: ComponentFixture<Example2TabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example2TabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
