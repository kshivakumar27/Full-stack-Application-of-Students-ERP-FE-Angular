
/*


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
//import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class HelloWordService {

  constructor(private http: HttpClient) { }

  helloWorldService() {
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('shiv' + ':' + 'shiv') });
   return this.http.get<Message>('http://localhost:8080/api/v1/students');
  }
}




*/