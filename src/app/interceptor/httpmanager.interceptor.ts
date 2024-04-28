import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from "rxjs";
import {LoadingService} from "../service/loading.service";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpmanagerInterceptor implements HttpInterceptor{

  constructor(private loadingService:LoadingService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('23232323')
    console.log(req.url);
    this.loadingService.loding.next(true);
    return next.handle(req).pipe(
      catchError(err=>{
        console.log(err);
        return throwError(err);
      }),
      finalize(()=>{
        this.loadingService.loding.next(false);
      })
    )
  }

}


