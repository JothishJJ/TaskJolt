import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthErrorService } from 'src/app/services/auth-error/auth-error.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authError = inject(AuthErrorService);
  return (await authError.isLoggedIn()) && (await authError.isVerified());
};
