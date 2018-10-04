import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algo-first',
  templateUrl: './algo-first.component.html',
  styleUrls: ['./algo-first.component.css']
})
export class AlgoFirstComponent implements OnInit {

  arr = [0,1,0,1,0,1,0,0,0,1];
  opArr = [];
  zeroCount = 0;
  constructor() { }

  ngOnInit() {
    
    for (var i = 0; i < this.arr.length ; i++) {debugger;
      this.zeroCount =  this.zeroCount + this.arr[i]
    }
    var numberOfZero = (this.arr.length*1 - this.zeroCount);
    for(var i = 0 ; i < numberOfZero; i++) {
      this.opArr.push(0);
    }
    for(var i =  numberOfZero; i < this.arr.length ; i++) {
      this.opArr.push(1)
    }
  }

}
