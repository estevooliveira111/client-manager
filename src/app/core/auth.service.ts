import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    this.loadUser();
  }

  private async loadUser() {
    const { data, error } = await this.supabase.auth.getUser();

    if (data?.user) {
      console.log(data?.user);
      this.userSubject.next(data.user);
    } else {
      this.userSubject.next(null);
    }
  }

  getUser() {
    return this.userSubject.value;
  }

  async logout() {
    await this.supabase.auth.signOut();
    this.userSubject.next(null);
  }
}
