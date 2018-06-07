import { Injectable } from '@angular/core';
@Injectable()
export class Logger {
    data :any;
    log(msg: any)   { console.log(msg);  this.data=msg; }
    error(msg: any) { console.error(msg); }
    warn(msg: any)  { console.warn(msg); }
    getData(){
      return this.data;
    }
  }