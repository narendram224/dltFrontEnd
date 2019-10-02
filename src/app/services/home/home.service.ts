import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private api:ApiService) {
    // this.postUrlToServer({url:"https://forum.wordreference.com/threads/may-i-you-home.291416/"}).subscribe((res)=>{
    //   console.log(res);
      
    // })
   }
  postUrlToServer(inputUrl){
    return this.api.post('new',inputUrl);
   }
 
}
