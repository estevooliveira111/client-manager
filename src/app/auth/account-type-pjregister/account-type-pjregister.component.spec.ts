import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypePJRegisterComponent } from './account-type-pjregister.component';

describe('AccountTypePJRegisterComponent', () => {
  let component: AccountTypePJRegisterComponent;
  let fixture: ComponentFixture<AccountTypePJRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTypePJRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTypePJRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
