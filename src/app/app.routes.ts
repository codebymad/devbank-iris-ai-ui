import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AccountsPage } from './pages/accounts-page/accounts-page';
import { CardsPage } from './pages/cards-page/cards-page';
import { TransfersPage } from './pages/transfers-page/transfers-page';
import { LoansPage } from './pages/loans-page/loans-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'accounts', component: AccountsPage },
  { path: 'cards', component: CardsPage },
  { path: 'transfers', component: TransfersPage },
  { path: 'loans', component: LoansPage },
];
