import { Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptor } from 'angular2-http-interceptor';

export class AuthInterceptor implements HttpInterceptor {

    before(request: Request): Request {
        console.log(request);
        return request;
    }

    after(res: Observable<Response>): Observable<any> {
        console.log(res);
        return res;
    }

}
