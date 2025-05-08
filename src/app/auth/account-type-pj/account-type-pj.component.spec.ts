import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypePJComponent } from './account-type-pj.component';

describe('AccountTypePJComponent', () => {
  let component: AccountTypePJComponent;
  let fixture: ComponentFixture<AccountTypePJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTypePJComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTypePJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
