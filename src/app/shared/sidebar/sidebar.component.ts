import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  userEmail: string | null = null;
  userName: string | null = null;
  userAvatar: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.userEmail = user?.email ?? null;

      // this.userName = user?.user_metadata?.['name'] ?? null;
      // this.userAvatar = user?.user_metadata?.['avatar_url'] ?? null;

      // this.userName = user?.name ?? null;
      // this.userAvatar = user?.avatar_url ?? null;
    });
  }

}
