import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/Core/Services/ConfigService/config.service';
import { TokenModel } from '../../Models/token';
import { CommonService } from 'src/app/Core/Services/CommonService/common.service';

@Injectable({
  providedIn: 'root'
})
export class DTCService {
  private ApiConfigFile:any;

  constructor(private Config:ConfigService, private http: HttpClient, private _Common:CommonService) {
    this.ApiConfigFile = this.Config.GetApiConfigFile();
  }

  GetHeaders(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._Common.getDTCToken());
    return headers;
  }

  CreateToken(model:TokenModel){
    let apiLink = this.ApiConfigFile['DatabaseToCodeAPI']+`api/CreateToken`;
    return this.http.post(apiLink, model, { headers: this.GetHeaders() });
  }

  GetToken(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._Common.getDTCToken());
    let apiLink = this.ApiConfigFile['DatabaseToCodeAPI']+`api/GetToken`;
    return this.http.get(apiLink, { headers: this.GetHeaders() });
  }
}
