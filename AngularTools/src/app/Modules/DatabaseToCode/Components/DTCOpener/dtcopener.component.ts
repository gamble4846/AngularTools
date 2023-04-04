import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Core/Services/CommonService/common.service';
import { ConfigService } from 'src/app/Core/Services/ConfigService/config.service';
import { DTCService } from '../../Services/DTCService/dtc.service';

@Component({
  selector: 'app-dtcopener',
  templateUrl: './dtcopener.component.html',
  styleUrls: ['./dtcopener.component.css']
})
export class DTCOpenerComponent implements OnInit {

  constructor(public _Config:ConfigService, private _Common:CommonService, private _DTC:DTCService) { }

  ngOnInit(): void {
    this.CreateToken();
    this.GetTokenDataIfExists();
  }

  CreateToken(){
    
  }

  GetTokenDataIfExists(){
    if(this._Common.CheckIfTokenExists("DTCToken")){
      this._DTC.GetToken().subscribe((response:any) => {
        if(response.code == 1){
          console.log(response);
        }
      })
    }
  }

}
