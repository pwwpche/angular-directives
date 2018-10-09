import moment from 'moment';
import {Injectable} from '@angular/core';

@Injectable() 
export class CreditService {

  toExpiration(date: string) {
    return moment(date, 'MMYY').format('MM / YY');
  }

  fromExpiration(date: string) {
    return moment(date, 'MM / YY').format('MM/YY');
  }

  validate(date: string) {
    return moment(date, 'MMYY', true).isValid();
  }
}