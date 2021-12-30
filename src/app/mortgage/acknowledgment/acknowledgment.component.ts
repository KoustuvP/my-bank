import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MortgageService } from '../services/mortgage.service';

@Component({
  selector: 'app-acknowledgment',
  templateUrl: './acknowledgment.component.html',
  styleUrls: ['./acknowledgment.component.css'],
})
export class AcknowledgmentComponent implements OnInit {
  isAccepted: FormControl;
  isHappy: FormControl;
  mortgageConfirmationForm: FormGroup;
  constructor(
    private mortgageService: MortgageService,
    private router: Router
  ) {
    this.isAccepted = new FormControl(false, [Validators.requiredTrue]);
    this.isHappy = new FormControl(false, [Validators.requiredTrue]);
    this.mortgageConfirmationForm = new FormGroup({
      isAccepted: this.isAccepted,
      isHappy: this.isHappy,
    });
  }

  onContinue() {
    this.mortgageService.confirmMortgage();
    this.router.navigate(['/mortgage/property-details']);
  }
  ngOnInit(): void {
    if (this.mortgageService.isPropertyDetailsAvailable) {
      this.mortgageConfirmationForm.setValue({
        isAccepted: true,
        isHappy: true,
      });
    }
  }
  getError() {
    return !this.mortgageConfirmationForm.valid;
  }
}
