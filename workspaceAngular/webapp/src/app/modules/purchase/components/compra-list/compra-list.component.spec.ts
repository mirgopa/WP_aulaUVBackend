import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraListComponent } from './compra-list.component';

describe('CompraListComponent', () => {
  let component: CompraListComponent;
  let fixture: ComponentFixture<CompraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
