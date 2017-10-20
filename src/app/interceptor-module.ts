import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';

import { HttpsRequestInterceptor } from './http-request-interceptor';

@NgModule({
providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
    ]
})
export class InterceptorModule { }
