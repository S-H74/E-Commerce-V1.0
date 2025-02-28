import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PlatFormService } from '../../services/platForm/plat-form.service';

export const routeGuard: CanActivateFn = (route, state) => {
  let routing = inject(Router);
  let platform = inject(PlatFormService);
  if (platform.checkingPlatForm()) {
    if(localStorage.getItem('userToken')!=null)
      {
        return true;
      }
    }
    routing.navigate(['/login']);
    return false;
};

