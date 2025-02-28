import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const handlingErrorInterceptor: HttpInterceptorFn = (req, next) => {
  // let toastrService :ToastrService = inject(ToastrService);
  // return next(req).pipe(catchError((err)=>{
  //   toastrService.error(err.error.message,"Error !");
  //   return throwError(()=>{err});
  // }))
  let toastrService: ToastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {
      console.log('Interceptor Error:', err.message);

      // Handle missing `err.error` safely
      const errorMessage = err.error?.message || 'An unknown error occurred';

      toastrService.error(errorMessage, 'Error !');

      return throwError(() => err);
    })
  );
};
