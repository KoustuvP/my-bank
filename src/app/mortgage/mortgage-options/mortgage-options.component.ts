import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mortgage-options',
  templateUrl: './mortgage-options.component.html',
  styleUrls: ['./mortgage-options.component.css']
})
export class MortgageOptionsComponent implements OnInit {

  data:any=[{
    "description": "string",
    "initialRate": 0,
    "monthlyRepayment": "string",
    "productFee": 0,
    "monthlRepayments": "string",
  }]
  options:any;

  constructor(private router:Router) { 
  }

  onSaveAndContinue=()=>this.router.navigateByUrl('/home/mortgage-confirmation')

  ngOnInit(): void {
    this.options=Object.keys(this.data[0])
  }

}
