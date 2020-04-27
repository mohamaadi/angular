import { Component, OnInit } from '@angular/core';
import {ICar} from "./car";
import { MyService } from './car.service';

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
 _ListFilter : string;

 get ListFilter():string{
   return this._ListFilter;
 }
 
 set ListFilter(value:string){
    this._ListFilter=value;
    this.filteredCars=this.ListFilter? this.performaFilter(this.ListFilter) : this.cars;
 }

  filteredCars: ICar[];
  cars : ICar[] ;
  toggleImage() :void {
     this.showImage = !this.showImage;
  }
  private errorMessage : string='';
  private _carService;
  constructor(private carService :MyService) {
    this._carService = carService;
    //this.ListFilter="mazda";
   }

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next:cars => {this.cars = cars,this.filteredCars=this.cars;},
      error: err => this .errorMessage =err ,
    });
    
  }

  performaFilter(st :string) : ICar[] {
    st= st.toLowerCase();
    return this.cars.filter((car:ICar) => car.carname.toLowerCase().indexOf(st) !=-1);
  }

}
