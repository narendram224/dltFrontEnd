import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api:ApiService) { }

  getDashboardData(){
    this.api.get('');
  }
}
