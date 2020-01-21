import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  students: Array<any> = [];

  constructor() { }
}
