import { CanActivateFn } from '@angular/router';
import { FormComponent } from '../components/form/form.component';
export const privateRouteGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('Login')=='Sim')
    return true;

    return false;
};
