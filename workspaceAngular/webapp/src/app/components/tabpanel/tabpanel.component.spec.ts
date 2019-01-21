import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabpanelComponent } from './tabpanel.component';

describe('TabpanelComponent', () => {
  let component: TabpanelComponent;
  let fixture: ComponentFixture<TabpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
