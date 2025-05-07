import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard-layout',
  imports: [NavbarComponent, RouterModule, SidebarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {}
