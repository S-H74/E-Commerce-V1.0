import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  let userHeaderToken : any ={token :localStorage.getItem('userToken')};
  req = req.clone({
    setHeaders: userHeaderToken,
  })
  return next(req);
};
