import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuppliersComponent } from './list-suppliers.component';

describe('ListSuppliersComponent', () => {
  let component: ListSuppliersComponent;
  let fixture: ComponentFixture<ListSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSuppliersComponent]
    });
    fixture = TestBed.createComponent(ListSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
