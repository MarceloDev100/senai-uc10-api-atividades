import { Injectable } from '@angular/core';
import { LoginStatus } from 'global';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private subject  = new BehaviorSubject<LoginStatus>({ email: '', username: '', active: false });

  currentStatus = this.subject.asObservable();

  constructor() { }

   changeStatus(status: LoginStatus){
      this.subject.next(status);
   }
}
