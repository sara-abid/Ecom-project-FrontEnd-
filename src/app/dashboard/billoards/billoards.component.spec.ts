import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilloardsComponent } from './billoards.component';

describe('BilloardsComponent', () => {
  let component: BilloardsComponent;
  let fixture: ComponentFixture<BilloardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilloardsComponent]
    });
    fixture = TestBed.createComponent(BilloardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
