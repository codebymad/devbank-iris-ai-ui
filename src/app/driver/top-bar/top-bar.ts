import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { ChatPage } from '../../pages/chat-page/chat-page';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-top-bar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, CommonModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {
  readonly dialog = inject(MatDialog);
  readonly router = inject(Router);
  menuItems = [
    { key: 'home', label: 'Home', icon: 'home', action: () => this.navigateToHome() },
    { key: 'accounts', label: 'Accounts', icon: 'account_balance', action: () => this.navigateToAccounts() },
    { key: 'cards', label: 'Cards', icon: 'credit_card', action: () => this.navigateToCards() },
    { key: 'transfers', label: 'Transfers', icon: 'currency_exchange', action: () => this.navigateToTransfers() },
    { key: 'loans', label: 'Loans', icon: 'local_atm', action: () => this.navigateToLoans() }
  ];
  selectedMenu = 'home';


  openDialog() {
    const dialogRef = this.dialog.open(ChatPage, {
      data: {},
      height: '95vh',
      width: '40vw',
      maxHeight: '95vh',
      maxWidth: '95vw',
      position: {
        right: '15px'
      }
    });
  }

  navigateToHome() {
    this.selectedMenu = 'home';
    this.router.navigate(['/home']);
  }

  navigateToAccounts() {
    this.selectedMenu = 'accounts';
    this.router.navigate(['/accounts']);
  }

  navigateToCards() {
    this.selectedMenu = 'cards';
    // Placeholder: navigate to home or add route later
    this.router.navigate(['/cards']);
  }

  navigateToTransfers() {
    this.selectedMenu = 'transfers';
    // Placeholder
    this.router.navigate(['/transfers']);
  }

  navigateToLoans() {
    this.selectedMenu = 'loans';
    // Placeholder
    this.router.navigate(['/loans']);
  }
}
