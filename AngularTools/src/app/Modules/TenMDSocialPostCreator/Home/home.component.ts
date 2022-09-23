import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  background:string = "linear-gradient(180deg, rgba(37,235,229,1) 0%, rgba(13,154,240,1) 100%);";
  fullHeight:any = 1920;
  fullWidth:any = 1920;
  firstLogo:string = "https://i.imgur.com/GNJVTtW.png";
  secondLogo:string = "https://i.imgur.com/LXJqbKf.png";
  centerImage:string = "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=";
  imageHeight:any = 0;
  footerDataOne:string = "@tenminutedose";
  footerDataTwo:string = "u/USERNAME";
  footerDataThree:string = "10 Minutes Dose";

  constructor() { }

  ngOnInit(): void {
    this.imageHeight = (this.fullHeight - 200) + "px";
    this.fullHeight = this.fullHeight + "px";
    this.fullWidth = this.fullWidth + "px";
  }

  createImage(){
    html2canvas(document.getElementById("imageContainer")!, {
      allowTaint: true, useCORS: true
    }).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg")!.appendChild(canvas);
        anchorTag.download = "filename.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    });
  }
}
