import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MortgageService } from './services/mortgage.service';

@Injectable()
export class MortgageGuard implements CanActivateChild {
  prevUrl: string = '';
  isAllowed: boolean = false;
  constructor(
    private router: Router,
    private mortgageService: MortgageService
  ) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.isAllowed = false;

    switch (state.url) {
      case '/mortgage/how-to-apply':
        this.isAllowed = true;
        break;
      case '/mortgage/mortgage-options':
        this.isAllowed = true;
        break;
      case '/mortgage/mortgage-confirmation':
        this.isAllowed = true;
        break;
      case '/mortgage/property-details':
        this.mortgageService.isPropertyDetailsAvailable
          ? (this.isAllowed = true)
          : (this.isAllowed = false);
        break;
      case '/mortgage/validations':
        this.mortgageService.isValuationDetailsAvailable
          ? (this.isAllowed = true)
          : (this.isAllowed = false);
        break;
      case '/mortgage/solicitor':
        this.mortgageService.isSolicitorAvailable
          ? (this.isAllowed = true)
          : (this.isAllowed = false);
        break;
      case '/mortgage/payment-details':
        this.mortgageService.isPaymentDetailsAvailable
          ? (this.isAllowed = true)
          : (this.isAllowed = false);
        break;
      case '/mortgage/review-submit':
        this.mortgageService.isPaymentDetailsAvailable &&
        this.mortgageService.isValuationDetailsAvailable &&
        this.mortgageService.isPropertyDetailsAvailable
          ? (this.isAllowed = true)
          : (this.isAllowed = false);
        break;
      default:
        this.isAllowed = false;
    }
    if (!this.isAllowed) this.router.navigateByUrl(this.prevUrl);
    else this.prevUrl = state.url;
    return this.isAllowed;
  }
}
