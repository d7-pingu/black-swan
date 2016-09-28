import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Alert } from '../shared/alert/alert';
import { AlertService } from '../shared/alert/alert.service';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RepositoryFinderService {

  private apiUrlToSearch: string = 'https://api.github.com/search';

  constructor(
    private http : Http,
    private alertService : AlertService
  ) { }

  searchByType(type: string, keyword: string): Observable<any[]>{ // type can be repositories, users, issues ...
    let url = `${this.apiUrlToSearch}/${type}?q=${keyword}`;
    return this.http.get(url)
      .map(res => res.json().items as any[])
      .catch(error => this.handleError(error));
  }

  getIssues(url: string, number?: string): Observable<any[]>{
    if(!number){ number = '' }

    url = url.replace('{/number}', `${number}`);

    return this.http.get(url)
      .map(res => res.json() as any[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> { // TODO: create UX friendly error handling with alert.service
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
