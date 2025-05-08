import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypePFRegisterComponent } from './account-type-pfregister.component';

describe('AccountTypePFRegisterComponent', () => {
  let component: AccountTypePFRegisterComponent;
  let fixture: ComponentFixture<AccountTypePFRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTypePFRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTypePFRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
