import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Core/Services/CommonService/common.service';

@Component({
  selector: 'app-rpgopener',
  templateUrl: './rpgopener.component.html',
  styleUrls: ['./rpgopener.component.css']
})
export class RPGOpenerComponent implements OnInit {

  passwordLength:number = 35;
  passwordFieldTextBox:string = "";
  radioCustomization:string = "3";
  UppercaseCheck:boolean = true;
  LowercaseCheck:boolean = true;
  NumbersCheck:boolean = true;
  SymbolsCheck:boolean = true;
  FirstAndLastCheck:boolean = true;

  UPPERCASE:Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  LOWERCASE:Array<string> = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  NUMBERS:Array<string> = ['0','1','2','3','4','5','6','7','8','9'];
  SYMBOLS:Array<string> = ['!','@','#','$','^','&','(',')','+','-',"_"];

  constructor(
    private _cs:CommonService,
  ) { }

  ngOnInit(): void {
    this.generateNewPassword();
  }

  generateNewPassword(){
    let ToUse:Array<any> = [];

    if(this.UppercaseCheck){ ToUse.push(0) }
    if(this.LowercaseCheck){ ToUse.push(1) }
    if(this.NumbersCheck){ ToUse.push(2) }
    if(this.SymbolsCheck){ ToUse.push(3) }

    this.passwordFieldTextBox = "";

    for (let i = 0; i < this.passwordLength; i++) {
      let toUseCurrent = ToUse[Math.floor(Math.random()*ToUse.length)]
      let currentItem:Array<any> = [];
      switch(toUseCurrent) {
        case 0:
          currentItem = this.UPPERCASE;
          break;
        case 1:
          currentItem = this.LOWERCASE;
          break;
        case 2:
          currentItem = this.NUMBERS;
          break;
        case 3:
          currentItem = this.SYMBOLS;
          break;
      }
      this.passwordFieldTextBox += currentItem[Math.floor(Math.random()*currentItem.length)]
    }

    if(this.FirstAndLastCheck){
      this.passwordFieldTextBox = this.passwordFieldTextBox.substring(0, this.passwordFieldTextBox.length - 2);
      this.passwordFieldTextBox = this.UPPERCASE[Math.floor(Math.random()*this.UPPERCASE.length)] + this.passwordFieldTextBox + this.UPPERCASE[Math.floor(Math.random()*this.UPPERCASE.length)];
    
      if(this.passwordLength == 1){
        this.passwordFieldTextBox = this.passwordFieldTextBox.substring(0, this.passwordFieldTextBox.length - 1);
      }
    }

    if(this.radioCustomization == "2"){
      while(this.passwordFieldTextBox.includes('l') || this.passwordFieldTextBox.includes('1') || this.passwordFieldTextBox.includes('0') || this.passwordFieldTextBox.includes('o') || this.passwordFieldTextBox.includes('O') || this.passwordFieldTextBox.includes('L')){
        this.passwordFieldTextBox = this.passwordFieldTextBox.replace("l", this.UPPERCASE[Math.floor(Math.random()*this.UPPERCASE.length)]);
        this.passwordFieldTextBox = this.passwordFieldTextBox.replace("L", this.LOWERCASE[Math.floor(Math.random()*this.LOWERCASE.length)]);
        this.passwordFieldTextBox = this.passwordFieldTextBox.replace("o", this.UPPERCASE[Math.floor(Math.random()*this.UPPERCASE.length)]);
        this.passwordFieldTextBox = this.passwordFieldTextBox.replace("O", this.LOWERCASE[Math.floor(Math.random()*this.LOWERCASE.length)]);
        this.passwordFieldTextBox = this.passwordFieldTextBox.replace("0", this.UPPERCASE[Math.floor(Math.random()*this.UPPERCASE.length)]);
        this.passwordFieldTextBox = this.passwordFieldTextBox.replace("1", this.LOWERCASE[Math.floor(Math.random()*this.LOWERCASE.length)]);
      }
    }
  }

  radioCustomizationChanged(){
    if(this.radioCustomization == "1"){
      this.NumbersCheck = false;
      this.SymbolsCheck = false;
    }

    if(this.radioCustomization == "3"){
      this.UppercaseCheck = true;
      this.LowercaseCheck = true;
      this.NumbersCheck = true;
      this.SymbolsCheck = true;
    }

    this.generateNewPassword();
  }

  copyPassword(){
    this._cs.copyString(this.passwordFieldTextBox);
    this._cs.showMessage("success","Password Copied")
  }
}
