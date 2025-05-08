import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypePFComponent } from './account-type-pf.component';

describe('AccountTypePFComponent', () => {
  let component: AccountTypePFComponent;
  let fixture: ComponentFixture<AccountTypePFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTypePFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTypePFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
