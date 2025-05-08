import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Menu {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  userEmail: string | null = null;
  userName: string | null = null;
  userAvatar: string | null = null;
  menus: Menu[] = [
    {
      label: 'Overview',
      route: 'overview',
      icon: 'fas fa-tachometer-alt',
    },
    {
      label: 'Transaction',
      route: 'transaction',
      icon: 'fas fa-exchange-alt',
    },
    {
      label: 'Pix Saida',
      route: 'pix-saida',
      icon: 'fas fa-money-bill-wave',
    },
    {
      label: 'Pagamentos',
      route: 'pagamentos',
      icon: 'fas fa-credit-card',
    },
    {
      label: 'Payments',
      route: 'payments',
      icon: 'fas fa-dollar-sign',
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.userEmail = user?.email ?? null;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
