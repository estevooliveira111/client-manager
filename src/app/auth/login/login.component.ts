import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SupabaseService } from '../../core/supabase.service';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    try {
      await this.supabaseService.signIn(email, password);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMessage =
        error.message || 'Erro ao fazer login. Tente novamente.';
    } finally {
      this.isLoading = false;
    }
  }
}
