import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { catchError, delay, forkJoin, map, of } from 'rxjs';
import { LoaderService } from '../shared/services/loader.service';
import { MortgageService } from './services/mortgage.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css'],
})
export class MortgageComponent implements OnInit {
  routerLinks = [
    { name: 'How to Apply', path: 'how-to-apply' },
    { name: 'Mortgage Options', path: 'mortgage-options' },
    { name: 'Confirm Mortgage', path: 'confirm-mortgage' },
    { name: 'Property Details', path: 'property-details' },
    { name: 'Valuations', path: 'valuations' },
    { name: 'Solicitor', path: 'solicitor' },
    { name: 'Payment Details', path: 'payment-details' },
    { name: 'Review And Submit', path: 'review'},
  ];
  isOpened: boolean = false;

  constructor(
    private router: Router, private loaderService: LoaderService,
    private mortgageService: MortgageService
  )   
  {}

  ngOnInit(): void {
    this.router.events.pipe(map(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.changeLoadingState(true)
      }
      return event;
    }),
      delay(1000)).subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.loaderService.changeLoadingState(false)
        }
        if (event instanceof NavigationCancel) {
          this.loaderService.changeLoadingState(false)
          this.isOpened = true;
        }
      })
    forkJoin({
      propertyDetails: this.mortgageService.getPropertyDetails().pipe(catchError(err=>of([]))),
      valuation: this.mortgageService.getValuation().pipe(catchError(err=>of([]))),
      paymentDetails: this.mortgageService.getPaymentDetails().pipe(catchError(err=>of(undefined)))
    })
      .subscribe(({ propertyDetails, valuation, paymentDetails }) => {
        if (propertyDetails&&propertyDetails.length) {
          if (propertyDetails.length == valuation.length && paymentDetails) {
            //this.mortgageService.startFresh = true;
            this.mortgageService.setAvailability(true, true, true,true)
          }
          else if (propertyDetails.length == valuation.length && !paymentDetails) {
            this.mortgageService.startFresh = false;
            this.mortgageService.setAvailability(true, true, false,true)
          }
          else if (propertyDetails.length > valuation.length) {
            this.mortgageService.startFresh = false;
            this.mortgageService.setAvailability(true, true, false,false)
          }
        }
        else {
          this.mortgageService.startFresh = false;
          this.mortgageService.setAvailability(false, false, false,false)
        }
      });
  }
}
