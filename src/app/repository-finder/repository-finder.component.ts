import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertService, AlertComponent, Alert } from '../shared/index';
import { RepositoryFinderService, ResultsComponent } from './index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'app-repository-finder',
  templateUrl: './repository-finder.component.html',
  styleUrls: ['./repository-finder.component.css']
})
export class RepositoryFinderComponent implements OnInit {

  title = 'GitHub repository finder';
  results: any;
  alert: Alert;
  keyword: string = '';
  type: string = 'repositories';
  searchButtonContent: string = 'search';
  numberOfSearches: number = 0;

  @ViewChild(ResultsComponent)
  private resultComponent: ResultsComponent;
  availableIssues: any;

  constructor(
    private repositoryFinderService: RepositoryFinderService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.alertService.alertCreated$.subscribe(alert => {
      this.alert = alert; // TODO: load alert componenet somewhere
    });
  }

  search(): void{
    if(!this.keyword.trim()){ return; }
    this.searchButtonContent = 'searching...'
    this.repositoryFinderService.searchByType(this.type, this.keyword)
        .subscribe((results) => {
          this.results = results;
          this.searchButtonContent = 'search';
          this.numberOfSearches++;
        });
  }

  isKeyword(): boolean{
    return !!this.keyword.trim();
  }

  updateIssues(): void{
    this.availableIssues = this.resultComponent.availableIssues;
    setTimeout(() => { // TODO: find a better way to wait for the rendering
      location.href = '#issues';
    }, 200);
  }

}
