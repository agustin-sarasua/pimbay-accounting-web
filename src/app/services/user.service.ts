import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { RestService } from "./rest.service";
import { environment } from './../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http, private restService: RestService) { }

  public signin(username: string, pwd: string):Promise<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append("Authorization", "Basic " + btoa(username + ":" + pwd));
    return this.restService.doPost<string>(environment.backendUrl, "signin", "", headers, true);
  }

}
