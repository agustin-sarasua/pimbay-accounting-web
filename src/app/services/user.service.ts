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
    return this.http.post(environment.backendUrl + "signin", "", {headers})
      .toPromise()
      .then(this.extractToken)
      .catch(this.handleError);
  }

  extractToken(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.headers.get('token');
  }

  handleError (error: any) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }
}
