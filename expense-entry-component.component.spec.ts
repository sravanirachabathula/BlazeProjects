import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntryComponentComponent } from './expense-entry-component.component';

describe('ExpenseEntryComponentComponent', () => {
  let component: ExpenseEntryComponentComponent;
  let fixture: ComponentFixture<ExpenseEntryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseEntryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseEntryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
