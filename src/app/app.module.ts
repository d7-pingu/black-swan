import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepositoryFinderComponent } from './repository-finder/repository-finder.component';
import { ResultsComponent } from './repository-finder/results/results.component';
import { IssuesComponent } from './repository-finder/issues/issues.component';

import { RepositoryFinderService } from './repository-finder/repository-finder.service';
import { AlertComponent } from './shared/alert/alert.component';
import { AlertService } from './shared/alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryFinderComponent,
    ResultsComponent,
    IssuesComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RepositoryFinderService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
