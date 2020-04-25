import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  title:string ="first car List ";
  imageWidth:number =100;
  imageMargin:number = 2;
  showImage : boolean = false;
  // listFilter: string = 'Mazda';
 
  
  cars : any[] = [
    {
      "cardId":1,
      "carname":"mazda",
      "carcode":"crd-123",
      "releasedate":"march 19,2020",
      "discription":"amazing ",
      "price":"2000",
      "starrating":4.2,
      "imageUrl":"assets/image/Mazda.png"

    },
    {
      "cardId":2,
      "carname":"benze",
      "carcode":"crd-111",
      "releasedate":"march 19,2020",
      "discription":"amazing ",
      "price":"5000",
      "starrating":3.2,
      "imageUrl":"assets/image/benze.png"

    }
  ];
  toggleImage() :void {
     this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
