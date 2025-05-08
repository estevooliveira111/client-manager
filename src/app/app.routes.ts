import { Routes } from '@angular/router';
import { PaymentHistoryComponent } from './history/payment-history/payment-history.component';
import { PaymentComponent } from './payments/payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { authGuard } from './core/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountTypeComponent } from './auth/account-type/account-type.component';
import { AccountTypePFComponent } from './auth/account-type-pf/account-type-pf.component';
import { AccountTypePJComponent } from './auth/account-type-pj/account-type-pj.component';
import { AccountTypePJRegisterComponent } from './auth/account-type-pjregister/account-type-pjregister.component';
import { AccountTypePFRegisterComponent } from './auth/account-type-pfregister/account-type-pfregister.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'transaction', component: TransactionComponent },
      { path: 'history', component: PaymentHistoryComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account-type', component: AccountTypeComponent },

      { path: 'create-account-pf', component: AccountTypePFComponent },
      { path: 'account-pf', component: AccountTypePFRegisterComponent },

      { path: 'create-account-pj', component: AccountTypePJComponent },
      { path: 'account-pj', component: AccountTypePJRegisterComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
