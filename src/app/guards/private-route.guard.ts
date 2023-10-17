import { CanActivateFn } from '@angular/router';

export const privateRouteGuard: CanActivateFn = (route, state) => {
  return false;
};
