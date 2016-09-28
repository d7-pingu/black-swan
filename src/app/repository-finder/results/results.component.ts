import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RepositoryFinderService } from '../repository-finder.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() results: any;
  @Input() keyword: string;
  @Input() numberOfSearches: number;

  @Output() updateIssues = new EventEmitter();

  public availableIssues: any;

  constructor(
    private repositoryFinderService: RepositoryFinderService
  ) { }

  ngOnInit() {
  }

  showAvailableIssues(url: string): void { // TODO: change button while issues are loading
    this.repositoryFinderService.getIssues(url)
        .subscribe((results) => {
          this.availableIssues = results;
          this.updateIssues.emit('update');
        });
  }

  isAvailableIssues(issue: any): boolean{
    if(issue && issue.open_issues_count > 0){
      return true;
    }
    return false;
  }

  isKeyword(): boolean{ // This is an unused function, yet
    return !!this.keyword;
  }

  isResults(): boolean{
    if(this.results && this.results.length > 0){
      return true;
    }
    return false;
  }

  isAtleastOneSearch(): boolean{
    if(this.numberOfSearches > 0){
      return true;
    }
    return false;
  }

}
