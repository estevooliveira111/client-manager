import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from './supabase.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const supabaseService = inject(SupabaseService);
  const router = inject(Router);

  const session = await supabaseService.getSession();
  console.log(session);
  const isAuthenticated = !!session.data.session;

  if (!isAuthenticated) {
    router.navigate(['/login'], { queryParams: { redirect: state.url } });
    return false;
  }

  return true;
};
