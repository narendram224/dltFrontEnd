import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService,private api:ApiService) { }
  newUrl :string;
  ngOnInit() {
  }
  SendInputData(inputData){
    console.log(inputData);
    let url={
      url:inputData.value
    }
    // this.homeService.postUrlToServer(url).subscribe((res)=>{
    //   console.log(res);
      
    // },(error)=>{
    //   console.log(error);
      
    // });
    this.homeService.postUrlToServer(url).subscribe((res)=>{
      console.log(res);
     this.newUrl =  `${this.api.url}/${res.shortCode}`;
     console.log(this.newUrl);
     
    })

  }

}
