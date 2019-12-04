import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor {

  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{

    return next.handle(req).pipe(tap(response => {
      console.log("[LOGGER INTERCEPTOR]", response);
      return response;
    }))
  }

  constructor() { }
}
