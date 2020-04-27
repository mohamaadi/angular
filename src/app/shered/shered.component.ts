import { Component, OnInit , OnChanges} from '@angular/core';

@Component({
  selector: 'app-shered',
  templateUrl: './shered.component.html',
  styleUrls: ['./shered.component.css']
})
export class SheredComponent implements OnInit , OnChanges {
  starWidth : number;
  rating : number = 4 ;
  constructor() { }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5 ;
  }

  ngOnInit(): void {
   
  }

}
