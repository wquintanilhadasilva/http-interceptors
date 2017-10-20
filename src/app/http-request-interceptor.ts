import { Injectable } from '@angular/core';
/*import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';*/

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Interceptor');
        console.log(req);
        console.log(next);
        const dupReq = req.clone(
            { headers: req.headers.set('Consumer - Secret', 'some sample key')}
        );
        return next.handle(dupReq);
    }

}
