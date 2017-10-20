import { HttpService } from './http/http-services';
import { Component } from '@angular/core';
import {Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  r;

  constructor(private http: HttpService) {

  }

  private post() {
    this.http.post('https://httpbin.org/post',
      JSON.stringify({codigo: 5, descricao: 'abc'}))
      .map(response => response)
      .subscribe(dados => {
        console.log(dados);
        this.r = dados;
      });
  }

}
