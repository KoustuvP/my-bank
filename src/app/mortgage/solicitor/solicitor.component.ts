import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MortgageService } from '../services/mortgage.service';

@Component({
  selector: 'app-solicitor',
  templateUrl: './solicitor.component.html',
  styleUrls: ['./solicitor.component.css']
})
export class SolicitorComponent implements OnInit {

  private otherOccupantForm: FormGroup;
  private solicitorForm: FormGroup;
  otherOccupant: FormControl;
  bankPanel: FormControl;
  withoutSolicitor: FormControl
  constructor(private router: Router, 
    private mortgageService:MortgageService
    ) { 
    this.otherOccupant=new FormControl('',[Validators.required])
    this.bankPanel=new FormControl('',[Validators.required])
    this.withoutSolicitor=new FormControl('',[Validators.required])
    this.otherOccupantForm= new FormGroup({
      otherOccupant:this.otherOccupant
    })
    this.solicitorForm=new FormGroup({
      bankPanel:this.bankPanel,
      withoutSolicitor:this.withoutSolicitor
    })
  }

  setOtherOccupant(occupant:string){
    this.otherOccupant.setValue(occupant)
  }

  setSolicitorPanel(panel:string){
    this.bankPanel.setValue(panel)
  }

  setWithoutSolicitor(solicitor:string){
    this.withoutSolicitor.setValue(solicitor)
  }

  onSaveAndContinue(){
    this.mortgageService.setSolicitorDetails(this.otherOccupantForm.value,this.solicitorForm.value)
    this.router.navigateByUrl('/mortgage/payment-details')
  }
  ngOnInit(): void {
    this.otherOccupantForm.setValue(this.mortgageService.getOtherOccupant())
    this.solicitorForm.setValue(this.mortgageService.getSolicitor())
  }
}