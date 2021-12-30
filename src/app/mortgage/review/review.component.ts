import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { MortgageService } from '../services/mortgage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  panelOpenState = false;
  //panels = ['Property Details', 'Valuation', 'Other Occupants', 'Solicitor Details', 'payments Details'];
  panels:any
  propertyDetails?: any;
  valuation?: any;
  paymentDetails?: any
  constructor(
    private mortgageService: MortgageService
    ) {
    this.panels=[
      {
        title: 'Property Details',
        data: this.propertyDetails,
        link: '/mortgage/property-details'
      },
      {
        title: 'Valuation',
        data: this.valuation,
        link: '/mortgage/valuations'
      },
      {
        title: 'Other Occupants',
        data: {},
        link: '/mortgage/solicitor'
      },
      {
        title: 'Solicitor Details',
        data: {},
        link: '/mortgage/solicitor'
      },
      {
        title: 'payments Details',
        data: this.paymentDetails,
        link: '/mortgage/payment-details'
      }
    ]

  }


  ngOnInit(): void {
    this.mortgageService.getPropertyDetails().subscribe(details => {
      this.propertyDetails = details.pop();
    })
    this.mortgageService.getValuation().subscribe(valuation => {
      this, valuation = valuation;
    })
    forkJoin({
      propertyDetails: this.mortgageService.getPropertyDetails().pipe(map(res=>res.pop())),
      valuation: this.mortgageService.getValuation().pipe(map(res=>res.pop())),
      paymentDetails: this.mortgageService.getPaymentDetails()
    })
    .subscribe(({propertyDetails, valuation, paymentDetails}) => {
      this.panels[0].data=this.propertyDetails = propertyDetails;
      this.panels[1].data=this.valuation = valuation;
      this.panels[2].data = this.mortgageService.getOtherOccupant();
      this.panels[3].data= this.mortgageService.getSolicitor()
      this.panels[4].data=this.paymentDetails = paymentDetails;
    });
    
  }
}
