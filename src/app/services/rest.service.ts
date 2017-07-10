import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

@Injectable()
export class RestService {

  private authHeader: string ='X-PimbaAuth';

  constructor(private http: Http) { }

  doGet<T>(host: string, url: string, headers: Headers, secure: boolean): Promise<T> {
    if(secure){
      let pimbaToken = localStorage.getItem("pimbayToken");
      headers.append(this.authHeader, pimbaToken)
    }
    return this.http.get(host + url, {headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  doPost<T>(host: string, url: string, body: string, headers: Headers, secure: boolean): Promise<T> {
    if(secure){
      let pimbaToken = localStorage.getItem("pimbayToken");
      headers.append(this.authHeader, pimbaToken)
    }
    return this.http.post(host + url, body, {headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
  }

  handleError (error: any) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

}
