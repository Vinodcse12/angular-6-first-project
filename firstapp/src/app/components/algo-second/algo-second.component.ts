import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algo-second',
  templateUrl: './algo-second.component.html',
  styleUrls: ['./algo-second.component.css']
})
export class AlgoSecondComponent implements OnInit {
  inputArr = [0,0,1,1,0,1,0,0,1,1]
  constructor() { }

  ngOnInit() {
    
  }

}
