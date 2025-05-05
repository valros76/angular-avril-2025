import { AuthService } from "@/services/auth/auth.service";
import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";


export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authToken = authService.getToken();

  if(authToken){
    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${authToken}`)
    });
    return next(authReq);
  }

  return next(req);
};