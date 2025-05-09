import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BalanceDisplayComponent } from "../balance-display/balance-display.component";

interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

interface MenuCategory {
  title: string|null;
  items: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, BalanceDisplayComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  userEmail: string | null = null;
  userName: string | null = null;
  userAvatar: string | null = null;

  menuCategories: MenuCategory[] = [
    {
      title: '',
      items: [
        { label: 'Home', route: 'overview', icon: 'fas fa-home-alt' },
        {
          label: 'Transações',
          route: 'transaction',
          icon: 'fas fa-exchange-alt',
        },
      ],
    },
    {
      title: 'Serviços Bancários',
      items: [
        {
          label: 'Depositar',
          route: 'pix-saida',
          icon: 'fas fa-money-bill-wave',
        },
        { label: 'Pix', route: 'pagamentos', icon: 'fas fa-credit-card' },
        {
          label: 'Pagar Contas',
          route: 'pagamentos',
          icon: 'fas fa-credit-card',
        },
        {
          label: 'Transferir TED/DOC',
          route: 'payments',
          icon: 'fas fa-dollar-sign',
        },
      ],
    },
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