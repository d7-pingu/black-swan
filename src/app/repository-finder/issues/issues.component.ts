import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  @Input() issues: any;

  constructor() { }

  ngOnInit() {
  }

}
