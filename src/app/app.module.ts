import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { HttpService } from './http/http-services';

// import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
// import { InterceptorModule } from './interceptor-module';

// import { HttpInterceptorModule } from 'angular2-http-interceptor';
// import { AuthInterceptor } from './http-interceptor';

import { AppComponent } from './app.component';
// import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // HttpInterceptorModule.withInterceptors([AuthInterceptor])
    // HttpClientModule,
    // InterceptorModule
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
    /*{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true,
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
