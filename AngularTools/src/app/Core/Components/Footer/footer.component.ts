import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links:any = [
    {
      "text": "Home",
      "routerLink": "/",
    },
    {
      "text": "Random Password Generator",
      "routerLink": "/RandomPasswordGenerator",
    },
    {
      "text": "PDF Password Remover",
      "routerLink": "/PDFPasswordRemover",
    },
  ]

  linksPart1:any = [];
  linksPart2:any = [];

  constructor() { }

  ngOnInit(): void {
    for (var i=0; i<this.links.length; i++){
      if ((i+2)%2==0) {
        this.linksPart1.push(this.links[i]);
      }
      else {
        this.linksPart2.push(this.links[i]);
      }
    }
  }

  SocialClicked(social:string){
    let url = "";
    switch(social){
      case 'instagram':
        url = "https://www.instagram.com/gamble4846/";
        break;
      case 'github':
        url = "https://github.com/gamble4846";
        break;
      case 'linkedin':
        url = "https://www.linkedin.com/in/rohanpatel4846/";
        break;
      case 'reddit':
        url = "https://www.reddit.com/user/gamble4846";
        break;
      default:
        break;
    }
    window.open(url, '_blank')!.focus();
  }
}
