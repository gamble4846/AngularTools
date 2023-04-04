import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private message: NzMessageService) { }

  showMessage(type: string, message:string): void {
    this.message.create(type, message);
  }

  copyString(str:string){
    navigator.clipboard.writeText(str);
  }

  getDTCToken(){
    return localStorage.getItem("DTCToken");
  }

  CheckIfTokenExists(tokenName:string){
    let data = localStorage.getItem(tokenName);
    if(data){
      return true;
    }
    else{
      return false;
    }
  }
}
