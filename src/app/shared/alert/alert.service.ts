import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Alert } from '../index';

@Injectable()
export class AlertService {

  constructor() { }

  // Observable source(s)
  private createAlertSource = new Subject<Alert>();

  // Observable stream(s)
  alertCreated$ = this.createAlertSource.asObservable();

  createAlert(message: string, type?: string): void {
    console.log(message, type);
    if(!type){ type = 'success' } // set default alert type
    if(message){
      this.createAlertSource.next({'message': message, 'type': type});
    }else{
      console.error('An error occurred', 'empty alert message');
    }
  }

}
